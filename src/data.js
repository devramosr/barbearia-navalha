// Troque estes dados para adaptar o site a outro cliente.
// O site tem duas versões: português (endereço /) e inglês (endereço /en/).
//  - Dados iguais nos dois idiomas: `negocio`, `site` e os preços.
//  - Textos: dentro de `pt:` e `en:` (em cada serviço, horário e depoimento) e em `conteudo.pt` / `conteudo.en`.

export const negocio = {
  nome: 'Navalha & Cia',
  cidade: 'Pinheiros, São Paulo',
  endereco: 'Rua dos Pinheiros, 1234 – Pinheiros, São Paulo – SP',
  whatsapp: '5511999999999', // DDI + DDD + número, só dígitos
  whatsappTexto: '(11) 99999-9999',
  instagram: '@navalhaecia',
}

// Endereço final do site (ex.: 'https://navalha-e-cia.vercel.app'), sem barra no fim.
// Com ele preenchido, o build inclui link canônico, hreflang, imagem de prévia e sitemap.
export const site = { url: '' }

export const servicos = [
  { id: 'corte', preco: 55, pt: { nome: 'Corte masculino', desc: 'Tesoura ou máquina, lavagem e finalização.', tempo: '40 min' }, en: { nome: "Men's haircut", desc: 'Scissors or clippers, wash and finish.', tempo: '40 min' } },
  { id: 'barba', preco: 45, pt: { nome: 'Barba na navalha', desc: 'Toalha quente, óleo e acabamento na navalha.', tempo: '30 min' }, en: { nome: 'Straight-razor shave', desc: 'Hot towel, oil and a razor finish.', tempo: '30 min' } },
  { id: 'combo', preco: 90, destaque: true, pt: { nome: 'Corte + barba', desc: 'O combo mais pedido da casa.', tempo: '1 h 10' }, en: { nome: 'Haircut + beard', desc: 'Our most requested combo.', tempo: '1 h 10 min' } },
  { id: 'sobrancelha', preco: 20, pt: { nome: 'Sobrancelha', desc: 'Design na navalha ou pinça.', tempo: '10 min' }, en: { nome: 'Eyebrows', desc: 'Shaped with a razor or tweezers.', tempo: '10 min' } },
  { id: 'pigmentacao', preco: 60, pt: { nome: 'Pigmentação de barba', desc: 'Preenche falhas e realça o desenho.', tempo: '30 min' }, en: { nome: 'Beard pigmentation', desc: 'Fills in gaps and sharpens the shape.', tempo: '30 min' } },
  { id: 'infantil', preco: 45, pt: { nome: 'Corte infantil', desc: 'Até 10 anos, sem pressa.', tempo: '30 min' }, en: { nome: "Kids' haircut", desc: 'Up to age 10, no rush.', tempo: '30 min' } },
]

export const horarios = [
  { pt: { dia: 'Segunda a sexta', hora: '09h – 20h' }, en: { dia: 'Monday to Friday', hora: '9 am – 8 pm' } },
  { pt: { dia: 'Sábado', hora: '09h – 18h' }, en: { dia: 'Saturday', hora: '9 am – 6 pm' } },
  { pt: { dia: 'Domingo', hora: 'Fechado' }, en: { dia: 'Sunday', hora: 'Closed' } },
]

export const depoimentos = [
  { nome: 'Rafael M.', pt: 'Melhor barba que já fiz. Atendimento pontual e ambiente tranquilo.', en: 'Best shave I have ever had. On time and a relaxed place.' },
  { nome: 'Diego S.', pt: 'Agendei pelo WhatsApp em 2 minutos e fui atendido na hora marcada.', en: 'Booked on WhatsApp in 2 minutes and was seen right on time.' },
  { nome: 'Lucas P.', pt: 'Levo meu filho todo mês. Ele adora o corte e o pessoal é atencioso.', en: 'I bring my son every month. He loves the cut and the staff is kind.' },
]

export const conteudo = {
  pt: {
    meta: {
      titulo: 'Navalha & Cia · Barbearia em Pinheiros, São Paulo',
      descricao: 'Corte, barba e cuidado masculino em Pinheiros, São Paulo. Agende pelo WhatsApp. Site de demonstração com dados fictícios.',
      descricaoCurta: 'Corte e barba na navalha, no seu horário. Site de demonstração.',
      locale: 'pt_BR',
      hreflang: 'pt-BR',
    },
    ui: {
      moeda: 'pt-BR',
      navAria: 'Principal',
      idiomaAria: 'Idioma',
      nav: { servicos: 'Serviços', agendar: 'Agendar', contato: 'Contato' },
      eyebrow: 'Barbearia em',
      titulo: 'Corte e barba na navalha, no seu horário.',
      lead: 'Atendimento com hora marcada, toalha quente e ambiente sem pressa. Escolha o serviço e agende em um toque pelo WhatsApp.',
      btnAgendar: 'Agendar horário',
      btnPrecos: 'Ver preços',
      cartazAno: 'Desde 2014',
      cartazSub: 'Barbearia clássica',
      servicosTitulo: 'Serviços e preços',
      selo: 'Mais pedido',
      agendarTitulo: 'Monte seu horário',
      agendarLead: 'Marque o que você quer fazer. A mensagem já sai pronta no WhatsApp.',
      servicosLegenda: 'Serviços',
      total: 'Total',
      btnWhats: 'Agendar pelo WhatsApp',
      depoimentosTitulo: 'Quem já passou por aqui',
      ondeTitulo: 'Onde estamos',
      horariosTitulo: 'Horários',
      msgComServicos: 'Olá! Quero agendar: {servicos} (total {total}). Quais horários vocês têm?',
      msgSemServicos: 'Olá! Quero agendar um horário. Quais horários vocês têm?',
      msgOla: 'Olá!',
      demo: 'Site de demonstração com dados fictícios.',
    },
  },
  en: {
    meta: {
      titulo: 'Navalha & Cia · Barbershop in Pinheiros, São Paulo',
      descricao: 'Haircuts, straight-razor shaves and grooming in Pinheiros, São Paulo. Book on WhatsApp. Demo site with fictional data.',
      descricaoCurta: 'Haircuts and razor shaves, on your schedule. Demo site.',
      locale: 'en_US',
      hreflang: 'en',
    },
    ui: {
      moeda: 'en-US',
      navAria: 'Main',
      idiomaAria: 'Language',
      nav: { servicos: 'Services', agendar: 'Book', contato: 'Contact' },
      eyebrow: 'Barbershop in',
      titulo: 'Haircuts and razor shaves, on your schedule.',
      lead: 'Appointment-only service, hot towels and a relaxed place. Pick a service and book in one tap on WhatsApp.',
      btnAgendar: 'Book an appointment',
      btnPrecos: 'See prices',
      cartazAno: 'Since 2014',
      cartazSub: 'Classic barbershop',
      servicosTitulo: 'Services and prices',
      selo: 'Most popular',
      agendarTitulo: 'Build your appointment',
      agendarLead: 'Tick what you want done. The WhatsApp message comes out ready to send.',
      servicosLegenda: 'Services',
      total: 'Total',
      btnWhats: 'Book on WhatsApp',
      depoimentosTitulo: 'What our customers say',
      ondeTitulo: 'Find us',
      horariosTitulo: 'Opening hours',
      msgComServicos: 'Hi! I would like to book: {servicos} (total {total}). Which times do you have?',
      msgSemServicos: 'Hi! I would like to book an appointment. Which times do you have?',
      msgOla: 'Hi!',
      demo: 'Demo site with fictional data.',
    },
  },
}
