import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Empresa Institucional</title>
      </Head>
      <header className="header">
        <div className="container">
          <div className="logo">
            <Image src="/logo.png" alt="Logo" width={200} height={60} />
          </div>
          <nav>
            <a href="#sobre">Sobre</a>
            <a href="#servicos">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <Image src="/banner.jpg" alt="Banner" layout="responsive" width={1200} height={400} />
        <div className="hero-text">
          <h1>Bem-vindo à Nossa Empresa</h1>
          <p>Excelência e confiança em nossos serviços.</p>
        </div>
      </section>
      <section id="sobre" className="sobre container">
        <h2>Sobre Nós</h2>
        <p>Somos uma empresa dedicada a oferecer soluções de alta qualidade para nossos clientes.</p>
      </section>
      <section id="servicos" className="servicos container">
        <h2>Serviços</h2>
        <div className="servicos-grid">
          <div className="servico-item">
            <Image src="/service1.jpg" alt="Serviço 1" width={600} height={400} />
            <h3>Serviço 1</h3>
            <p>Descrição do serviço 1.</p>
          </div>
          <div className="servico-item">
            <Image src="/service2.jpg" alt="Serviço 2" width={600} height={400} />
            <h3>Serviço 2</h3>
            <p>Descrição do serviço 2.</p>
          </div>
        </div>
      </section>
      <section id="contato" className="contato container">
        <h2>Contato</h2>
        <p>Email: contato@empresa.com</p>
        <p>Telefone: (00) 1234-5678</p>
      </section>
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Empresa Institucional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}