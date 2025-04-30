export default function Footer() {
  return (
    <footer id="footer">
      <p>&copy; {new Date().getFullYear()} CodeNest</p>
      <div className="footer-links">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fas fa-shield-alt"></i></a>
      </div>
    </footer>
  );
}