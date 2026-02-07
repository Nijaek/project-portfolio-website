const CONNECTION_DISTANCE = 150;
const MOUSE_REPULSION_DISTANCE = 120;
const MOUSE_REPULSION_FORCE = 0.8;

export function createNodes(count, width, height) {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
    });
  }
  return nodes;
}

export function updateNodes(nodes, width, height, mouse) {
  for (const node of nodes) {
    // Mouse repulsion
    if (mouse.x !== null && mouse.y !== null) {
      const dx = node.x - mouse.x;
      const dy = node.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_REPULSION_DISTANCE && dist > 0) {
        const force = (1 - dist / MOUSE_REPULSION_DISTANCE) * MOUSE_REPULSION_FORCE;
        node.vx += (dx / dist) * force;
        node.vy += (dy / dist) * force;
      }
    }

    // Dampen velocity
    node.vx *= 0.99;
    node.vy *= 0.99;

    // Clamp speed
    const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
    if (speed > 1) {
      node.vx = (node.vx / speed) * 1;
      node.vy = (node.vy / speed) * 1;
    }

    // Move
    node.x += node.vx;
    node.y += node.vy;

    // Bounce off edges
    if (node.x < 0) { node.x = 0; node.vx *= -1; }
    if (node.x > width) { node.x = width; node.vx *= -1; }
    if (node.y < 0) { node.y = 0; node.vy *= -1; }
    if (node.y > height) { node.y = height; node.vy *= -1; }
  }
}

export function renderMesh(ctx, nodes, width, height) {
  ctx.clearRect(0, 0, width, height);

  // Draw connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < CONNECTION_DISTANCE) {
        const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.15;
        ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.stroke();
      }
    }
  }

  // Draw nodes
  for (const node of nodes) {
    ctx.fillStyle = 'rgba(96, 165, 250, 0.4)';
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}
