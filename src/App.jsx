import { useState } from 'react'
import { negocio, servicos, horarios, depoimentos, conteudo } from './data.js'

// Seletor de idioma: cada idioma é uma página própria (/ e /en/)
function Idiomas({ lang, rotulo }) {
  return (
    <nav className="idioma" aria-label={rotulo}>
      <a href="/" lang="pt-BR" hrefLang="pt-BR" title="Português" aria-current={lang === 'pt' ? 'true' : undefined}>PT</a>
      <a href="/en/" lang="en" hrefLang="en" title="English" aria-current={lang === 'en' ? 'true' : undefined}>EN</a>
    </nav>
  )
}

function Pole() {
  return <span className="pole" aria-hidden="true" />
}

export default function App({ lang = 'pt' }) {
  const c = conteudo[lang] || conteudo.pt
  const ui = c.ui
  const brl = (v) => v.toLocaleString(ui.moeda, { style: 'currency', currency: 'BRL' })
  const wa = (texto) => `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(texto)}`

  const [escolhidos, setEscolhidos] = useState(['combo'])

  const alternar = (id) =>
    setEscolhidos((atual) => (atual.includes(id) ? atual.filter((x) => x !== id) : [...atual, id]))

  const selecionados = servicos.filter((s) => escolhidos.includes(s.id))
  const total = selecionados.reduce((soma, s) => soma + s.preco, 0)

  const mensagem = selecionados.length
    ? ui.msgComServicos.replace('{servicos}', selecionados.map((s) => s[lang].nome).join(', ')).replace('{total}', brl(total))
    : ui.msgSemServicos

  return (
    <>
      <header className="topo">
        <a className="marca" href="#inicio">
          <Pole /> {negocio.nome}
        </a>
        <div className="topo-direita">
          <nav aria-label={ui.navAria}>
            <a href="#servicos">{ui.nav.servicos}</a>
            <a href="#agendar">{ui.nav.agendar}</a>
            <a href="#contato">{ui.nav.contato}</a>
          </nav>
          <Idiomas lang={lang} rotulo={ui.idiomaAria} />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">{ui.eyebrow} {negocio.cidade}</p>
              <h1>{ui.titulo}</h1>
              <p className="lead">{ui.lead}</p>
              <div className="acoes">
                <a className="btn btn-primario" href="#agendar">{ui.btnAgendar}</a>
                <a className="btn btn-linha" href="#servicos">{ui.btnPrecos}</a>
              </div>
            </div>
            <div className="cartaz" aria-hidden="true">
              <div className="cartaz-poste"><span /></div>
              <p className="cartaz-ano">{ui.cartazAno}</p>
              <p className="cartaz-nome">Navalha<br />&amp; Cia</p>
              <p className="cartaz-sub">{ui.cartazSub}</p>
            </div>
          </div>
        </section>

        <section className="secao" id="servicos">
          <div className="container">
            <h2>{ui.servicosTitulo}</h2>
            <ul className="lista-servicos">
              {servicos.map((s) => (
                <li key={s.id} className={s.destaque ? 'item destaque' : 'item'}>
                  <div>
                    <h3>
                      {s[lang].nome} {s.destaque && <span className="selo">{ui.selo}</span>}
                    </h3>
                    <p>{s[lang].desc}</p>
                  </div>
                  <div className="preco">
                    <strong>{brl(s.preco)}</strong>
                    <span>{s[lang].tempo}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="secao escura" id="agendar">
          <div className="container agendar">
            <div>
              <h2>{ui.agendarTitulo}</h2>
              <p className="lead">{ui.agendarLead}</p>
            </div>
            <div className="caixa">
              <fieldset>
                <legend className="sr">{ui.servicosLegenda}</legend>
                {servicos.map((s) => (
                  <label key={s.id} className="check" htmlFor={`s-${s.id}`}>
                    <input
                      id={`s-${s.id}`}
                      type="checkbox"
                      checked={escolhidos.includes(s.id)}
                      onChange={() => alternar(s.id)}
                    />
                    <span>{s[lang].nome}</span>
                    <em>{brl(s.preco)}</em>
                  </label>
                ))}
              </fieldset>
              <div className="total">
                <span>{ui.total}</span>
                <strong>{brl(total)}</strong>
              </div>
              <a className="btn btn-whats" href={wa(mensagem)} target="_blank" rel="noreferrer">
                {ui.btnWhats}
              </a>
            </div>
          </div>
        </section>

        <section className="secao">
          <div className="container">
            <h2>{ui.depoimentosTitulo}</h2>
            <div className="depoimentos">
              {depoimentos.map((d) => (
                <figure key={d.nome}>
                  <blockquote>{d[lang]}</blockquote>
                  <figcaption>{d.nome}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="secao claro" id="contato">
          <div className="container contato">
            <div>
              <h2>{ui.ondeTitulo}</h2>
              <p>{negocio.endereco}</p>
              <p>
                WhatsApp: <a href={wa(ui.msgOla)} target="_blank" rel="noreferrer">{negocio.whatsappTexto}</a>
              </p>
              <p>Instagram: {negocio.instagram}</p>
            </div>
            <div>
              <h2>{ui.horariosTitulo}</h2>
              <ul className="horarios">
                {horarios.map((h) => (
                  <li key={h.pt.dia}>
                    <span>{h[lang].dia}</span>
                    <strong>{h[lang].hora}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <div className="container">
          <span>© 2026 {negocio.nome}</span>
          <span>{ui.demo}</span>
        </div>
      </footer>
    </>
  )
}
