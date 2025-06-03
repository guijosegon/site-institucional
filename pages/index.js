import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Minha Empresa — Home</title>
        <meta
          name="description"
          content="Bem-vindo ao site oficial da Minha Empresa. Excelência e confiança em nossos serviços."
        />
      </Head>

    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <Link href="/" style={{ display: "block", lineHeight: 0 /* remove gap branco */ }}>
            <Image
              src="/logo.png"
              alt="Minha Empresa"
              width={180}       // largura fixa
              height={60}       // altura fixa
              objectFit="contain"
              priority
            />
        </Link>
      </div>

      <nav style={navStyle}>
        <Link href="/sobre" style={linkStyle}>Sobre</Link>
        <Link href="/servicos" style={linkStyle}>Serviços</Link>
        <Link href="/contato" style={linkStyle}>Contato</Link>
      </nav>
    </header>

      <main>
        <section style={bannerSectionStyle}>
          <Image
            src="/banner.png"
            alt="Banner Institucional"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div style={bannerOverlayStyle}>
            <h1 style={bannerTitleStyle}>Bem-vindo à Minha Empresa</h1>
            <p style={bannerSubtitleStyle}>
              Excelência e confiança em nossos serviços.
            </p>
          </div>
        </section>

        <section id="sobre" style={sectionContainerStyle}>
          <h2 style={sectionTitleStyle}>Sobre Nós</h2>
          <p style={sectionTextStyle}>
            Somos uma empresa dedicada a oferecer soluções de alta qualidade
            para nossos clientes.
          </p>
        </section>

        <section id="servicos" style={sectionContainerStyle}>
          <h2 style={sectionTitleStyle}>Serviços</h2>
          <div style={servicesGridStyle}>
            <div style={serviceCardStyle}>
              <Image
                src="/servico1.png"
                alt="Serviço 1"
                width={600}
                height={400}
                objectFit="cover"
              />
              <h3 style={serviceTitleStyle}>Consultoria</h3>
              <p style={serviceDescStyle}>Realizamos consultoria para nosssos clientes.</p>
            </div>

            <div style={serviceCardStyle}>
              <Image
                src="/servico2.png"
                alt="Serviço 2"
                width={600}
                height={400}
                objectFit="cover"
              />
              <h3 style={serviceTitleStyle}>Assitência</h3>
              <p style={serviceDescStyle}>Realizamos assistência para nosssos clientes.</p>
            </div>
          </div>
        </section>

        <section id="contato" style={sectionContainerStyle}>
          <h2 style={sectionTitleStyle}>Contato</h2>
          <p style={sectionTextStyle}>
            Email: <a href="mailto:contato@empresa.com">contato@empresa.com</a>
          </p>
          <p style={sectionTextStyle}>Telefone: (00) 1234-5678</p>
        </section>
      </main>

      <footer style={footerStyle}>
        <p style={footerTextStyle}>
          © 2025 Minha Empresa. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 2rem",
  backgroundColor: "#1a1a1a",
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const navStyle = {
  display: "flex",
  gap: "1.5rem",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  fontWeight: "500",
};

const bannerSectionStyle = {
  position: "relative",
  width: "100%",
  height: "400px",
};

const bannerOverlayStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "#ffffff",
  textAlign: "center",
  padding: "0 1rem",
};

const bannerTitleStyle = {
  fontSize: "2.5rem",
  margin: 0,
};

const bannerSubtitleStyle = {
  fontSize: "1.2rem",
  marginTop: "0.5rem",
};

const sectionContainerStyle = {
  maxWidth: "960px",
  margin: "3rem auto",
  padding: "0 1rem",
  textAlign: "center",
};

const sectionTitleStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
  color: "#333333",
};

const sectionTextStyle = {
  fontSize: "1rem",
  color: "#555555",
  lineHeight: "1.6",
};

const servicesGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  marginTop: "2rem",
};

const serviceCardStyle = {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const serviceTitleStyle = {
  fontSize: "1.25rem",
  margin: "1rem 0 0.5rem",
  color: "#222222",
};

const serviceDescStyle = {
  fontSize: "1rem",
  margin: "0 1rem 1.5rem",
  color: "#666666",
};

const footerStyle = {
  backgroundColor: "#eaeaea",
  textAlign: "center",
  padding: "1.5rem 0",
  marginTop: "3rem",
};

const footerTextStyle = {
  color: "#555555",
  fontSize: "0.9rem",
  margin: 0,
};