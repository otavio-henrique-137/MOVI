import { useEffect, useState } from 'react'
import logo from './assets/logo.png'
import fotoGabi from './assets/gabi.jpeg'
import fotoJlucas from './assets/jlucas.jpeg'
import fotoOtavio from './assets/otavio.jpeg'
import fotoNailto from './assets/nailto.jpeg'

const members = [
  {
    name: 'Gabriela Gomes',
    role: 'Gerente de Projetos',
    description: 'Conecta pessoas, prazos e objetivos para transformar estratégia em entregas consistentes.',
    photo: fotoGabi,
    accent: 'cyan',
  },
  {
    name: 'João Lucas Barbosa',
    role: 'Scrum Master',
    description: 'Facilita os rituais ágeis, remove impedimentos e mantém o time evoluindo a cada sprint.',
    photo: fotoJlucas,
    accent: 'green',
  },
  {
    name: 'Otávio Henrique',
    role: 'Engenheiro de Software',
    description: 'Projeta e desenvolve a tecnologia que transforma dados urbanos em experiências úteis.',
    photo: fotoOtavio,
    accent: 'purple',
  },
  {
     name: 'Nailto Santos',
    role: 'Engenheiro de Requisitos',
    description: 'Responsável por descobrir, analisar, documentar e gerenciar as necessidades de um sistema de software junto aos clientes e usuários.',
    photo: fotoNailto,
    accent: 'cyan',
  },

]

const documents = [
  { title: 'Ementa — Reunião #01', date: '02 set. 2026', description: 'Kick-off do projeto, definição de escopo e papéis.' },
  { title: 'Ementa — Reunião #02', date: '09 set. 2026', description: 'Revisão de requisitos e validação de protótipos iniciais.' },
  { title: 'Ementa — Reunião #03', date: '16 set. 2026', description: 'Sprint review, retrospectiva e planejamento do próximo ciclo.' },
  { title: 'Ementa — Reunião #04', date: '23 set. 2026', description: 'Entrega parcial e alinhamento com orientador.' },
]

const places = [
  { label: 'Quadras de basquete', icon: 'court' },
  { label: 'Pistas de skate', icon: 'skate' },
  { label: 'Ciclovias', icon: 'bike' },
  { label: 'Academias públicas', icon: 'gym' },
  { label: 'Campos de futebol', icon: 'field' },
  { label: 'Parques e trilhas', icon: 'park' },
]

function ArrowIcon({ direction = 'right' }: { direction?: 'left' | 'right' }) {
  return (
    <svg className={direction === 'left' ? 'rotate-180' : ''} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9h10.5M10 4.75 14.25 9 10 13.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 1.75h7l3 3V14H3V1.75Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M10 1.75v3h3M5.5 8h5M5.5 10.5h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="logo" aria-label="MOVI">
      <img
        src={logo}
        alt="MOVI - Movimento para uma vida melhor"
        style={{ height: compact ? '32px' : '42px', width: 'auto' }}
      />
    </div>
  )
}

export default function App() {
  const [docsOpen, setDocsOpen] = useState(false)
  const [activeMember, setActiveMember] = useState(0)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDocsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const changeMember = (step: number) => {
    setActiveMember((current) => (current + step + members.length) % members.length)
  }

  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Sobre</a>
            <a href="#proposta">Proposta</a>
            <a href="#equipe">Equipe</a>
          </nav>
          <button className="button button-docs" onClick={() => setDocsOpen(true)}>
            <DocumentIcon />
            <span>Documentações</span>
          </button>
        </div>
      </header>

      {docsOpen && (
        <div className="modal-backdrop" onClick={() => setDocsOpen(false)}>
          <section className="docs-modal" role="dialog" aria-modal="true" aria-labelledby="docs-title" onClick={(event) => event.stopPropagation()}>
            <div className="modal-header">
              <div>
                <p className="eyebrow">Arquivo acadêmico</p>
                <h2 id="docs-title">Documentações</h2>
                <p>Ementas das reuniões para acompanhamento do projeto.</p>
              </div>
              <button className="icon-button" onClick={() => setDocsOpen(false)} aria-label="Fechar documentações">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="m4.5 4.5 9 9m0-9-9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="documents-list">
              {documents.map((document) => (
                <article className="document-row" key={document.title}>
                  <span className="document-icon"><DocumentIcon /></span>
                  <div>
                    <h3>{document.title}</h3>
                    <p>{document.description}</p>
                  </div>
                  <time>{document.date}</time>
                </article>
              ))}
            </div>
            <p className="modal-note">Acesso reservado para avaliação acadêmica.</p>
          </section>
        </div>
      )}

      <section id="sobre" className="hero section">
        <div className="hero-orb hero-orb-purple" />
        <div className="hero-orb hero-orb-cyan" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="status-pill"><span /> ODS 3 · Saúde e Bem-Estar</p>
            <h1>Encontre seu lugar para <span className="gradient-text">se movimentar.</span></h1>
            <p className="hero-description">
              A MOVI mapeia espaços públicos para a prática de esportes e aproxima pessoas das oportunidades de uma vida mais ativa na cidade.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proposta">Conheça a proposta <ArrowIcon /></a>
              <a className="button button-secondary" href="#equipe">Nosso time</a>
            </div>
            <div className="hero-metrics" aria-label="Destaques do projeto">
              <div><strong>6+</strong><span>categorias de espaços</span></div>
              <div><strong>1</strong><span>cidade mais ativa</span></div>
              <div><strong>ODS 3</strong><span>impacto que nos move</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Quadra de basquete urbana mapeada pela MOVI">
            <img
              src="https://images.unsplash.com/photo-1615174438196-b3538fe68737?auto=format&fit=crop&w=1200&q=85"
              alt="Quadra de basquete ao ar livre"
            />
            <div className="image-overlay" />
            <div className="map-card map-card-top">
              <span className="map-pin" />
              <div><strong>Quadra encontrada</strong><small>Aberta ao público · 1,2 km</small></div>
            </div>
            <div className="map-card map-card-bottom">
              <span className="live-dot" />
              <div><small>Espaços no radar</small><strong>24 locais próximos</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section id="proposta" className="proposal section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Nossa proposta</p>
              <h2>A cidade inteira pode ser <span className="gradient-text">um convite ao movimento.</span></h2>
            </div>
            <p>
              Reunimos em um só lugar informações sobre áreas públicas de esporte e lazer, tornando mais simples descobrir onde e como se exercitar perto de casa.
            </p>
          </div>

          <div className="proposal-panel">
            <div className="proposal-copy">
              <span className="panel-number">01 / PROPÓSITO</span>
              <h3>Mapear para ocupar.<br />Ocupar para transformar.</h3>
              <p>
                Nossa plataforma identifica, organiza e apresenta espaços urbanos para práticas esportivas. Cada ponto mapeado ajuda a democratizar o acesso ao esporte, fortalece a convivência e promove bem-estar.
              </p>
              <div className="value-list">
                <div><span>01</span><p><strong>Descoberta simples</strong><small>Locais próximos e informações relevantes em poucos toques.</small></p></div>
                <div><span>02</span><p><strong>Acesso democrático</strong><small>Visibilidade para estruturas públicas de diferentes modalidades.</small></p></div>
                <div><span>03</span><p><strong>Impacto local</strong><small>Mais uso dos espaços e mais movimento nos bairros.</small></p></div>
              </div>
            </div>
            <div className="places-grid">
              {places.map((place, index) => (
                <article className={`place-card place-card-${place.icon}`} key={place.label}>
                  <span className="place-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="sport-mark" aria-hidden="true"><i /><i /><i /></div>
                  <h3>{place.label}</h3>
                  <p>Localizar no mapa <ArrowIcon /></p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="equipe" className="team section">
        <div className="container">
          <div className="team-heading">
            <div>
              <p className="eyebrow">Quem faz acontecer</p>
              <h2>Um time pequeno.<br /><span className="gradient-text">Uma visão grande.</span></h2>
            </div>
            <div className="carousel-controls">
              <p><span>0{activeMember + 1}</span> / 04</p>
              <button className="icon-button" onClick={() => changeMember(-1)} aria-label="Integrante anterior"><ArrowIcon direction="left" /></button>
              <button className="icon-button icon-button-active" onClick={() => changeMember(1)} aria-label="Próximo integrante"><ArrowIcon /></button>
            </div>
          </div>

          <div className="carousel" aria-live="polite">
            {members.map((member, index) => {
              const position = (index - activeMember + members.length) % members.length
              return (
                <article className={`member-card member-${member.accent} position-${position}`} key={member.name}>
                  <div className="member-topline"><span>0{index + 1}</span><span className="member-accent" /></div>
                  <div className="member-avatar">
                    <img src={member.photo} alt={`Foto de ${member.name}`} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-description">{member.description}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="carousel-dots" aria-label="Selecionar integrante">
            {members.map((member, index) => (
              <button
                key={member.name}
                className={index === activeMember ? 'active' : ''}
                onClick={() => setActiveMember(index)}
                aria-label={`Ver ${member.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-intro">
            <Logo compact />
            <h2>Vamos colocar a cidade <span className="gradient-text">em movimento?</span></h2>
          </div>
          <div className="contact-grid">
            <div>
              <span>E-mail</span>
              <a href="mailto:contato@movi.dev.br">contato@movi.dev.br</a>
            </div>
            <div>
              <span>Projeto</span>
              <p>Fábrica de Software · ODS 3</p>
            </div>
            <div>
              <span>Documentação</span>
              <button onClick={() => setDocsOpen(true)}>Consultar ementas <ArrowIcon /></button>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} MOVI. Tecnologia para cidades mais ativas.</p>
          <p>Saúde · Bem-estar · Comunidade</p>
        </div>
      </footer>
    </main>
  )
}
