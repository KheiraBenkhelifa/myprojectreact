import React from 'react'

function LegalNotice() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 md:px-20 py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <h1 className="text-4xl md:text-6xl font-bold font-serif mb-12 text-center p-20 text-gray-800">
        Aviso Legal
      </h1>

      <div className="max-w-4xl text-gray-700 leading-relaxed space-y-6 text-justify bg-white/70 p-8 rounded-2xl shadow-md">
        <p>
          A <strong>Associação 101010 Portugal</strong> é a entidade jurídica responsável pela 42 em Portugal.
          Trata-se de uma entidade sem fins lucrativos, com o objetivo de promover o desenvolvimento educativo e
          tecnológico, a formação profissional, a inclusão social e o desenvolvimento de competências, contribuindo
          para a criação de oportunidades no mercado de trabalho e na sociedade.
        </p>

        <p>
          A Associação 101010 Portugal é uma <strong>Instituição Particular de Solidariedade Social (IPSS)</strong>,
          reconhecida oficialmente desde 4 de Novembro de 2020 pela Direção Geral da Educação. 
        </p>

        <p>
          Atualmente, a Associação conta com <strong>22 membros associados</strong>, incluindo a equipa de gestão
          da escola e diversas personalidades de diferentes áreas da sociedade que acreditam no modelo educativo
          inovador e inclusivo da 42. Estes membros contribuem de forma ativa para o desenvolvimento da instituição
          e participam semestralmente em Assembleia Geral.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">Informações Jurídicas</h2>
        <p>
          A 101010 Portugal é responsável pela manutenção deste website e pelo tratamento dos dados recolhidos
          através dele. Todo o conteúdo disponibilizado é protegido por direitos de autor e não pode ser reproduzido
          sem autorização prévia.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">Responsabilidade sobre Conteúdos</h2>
        <p>
          Embora nos esforcemos para garantir que todas as informações aqui publicadas sejam precisas e atualizadas,
          a Associação 101010 Portugal não se responsabiliza por eventuais erros, omissões ou danos resultantes do uso
          das informações disponibilizadas neste site.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">Contactos</h2>
        <p>
          Caso tenha dúvidas ou pretenda obter mais informações sobre este aviso legal, pode entrar em contacto
          connosco através da página de <strong>Contacto</strong> deste website.
        </p>

        <p className="italic mt-8">
          Última atualização: Outubro de 2025
        </p>
      </div>
    </div>
  )
}

export default LegalNotice
