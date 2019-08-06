import React from "react"
import "./styles.css"

import { SocialCubo } from "../../components"
import { TextCubo, CopyrightCubo } from "../../objects"

const FooterCubo = () => (
  <footer className="footer-cubo">
    <div className="container">
      <TextCubo
        content={
          <>
            <strong>CUBO</strong>
            <address>
              Rua Casa do Ator, 919
              <br />
              04546-003 - São Paulo - SP <br />
              contato@cubo.networkdfdf{" "}
            </address>
          </>
        }
      />
      <SocialCubo />
    </div>

    <CopyrightCubo content="©copyright 2016 - Lorem ipsum dolor sit amet consectetur" />
  </footer>
)

export default FooterCubo
