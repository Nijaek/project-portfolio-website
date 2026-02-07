export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Nijae King
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/Nijaek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent no-underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nijaerayking/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent no-underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nking0306@gmail.com"
            className="text-sm text-muted transition-colors hover:text-accent no-underline"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-accent no-underline"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
