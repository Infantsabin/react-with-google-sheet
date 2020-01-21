/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()},
          Coded by{" "}
          <a
            href="https://in.linkedin.com/in/infant-sabin-a-788749149"
            target="_blank"
          >
            Infant Sabin
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
