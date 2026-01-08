import React from "react";

function Privacy() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 text-gray-800 px-6 py-20">
      <h1 className="text-5xl md:text-6xl font-semibold font-serif text-center p-20  text-pink-700">
        Política de Privacidade
      </h1>

      <div className="max-w-4xl space-y-8 text-justify leading-relaxed text-lg">
        <p>
          A <strong>CodeWay Academy</strong> valoriza a sua privacidade e está
          comprometida em proteger os seus dados pessoais. Esta Política de
          Privacidade explica como recolhemos, utilizamos e protegemos as suas
          informações quando visita o nosso website.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">
          1. Dados recolhidos
        </h2>
        <p>
          Poderemos recolher dados pessoais como nome, endereço de e-mail e
          número de telefone quando utiliza o nosso formulário de contacto ou se
          inscreve em um dos nossos cursos. Também recolhemos automaticamente
          informações técnicas como endereço IP, tipo de navegador e sistema
          operativo.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">
          2. Utilização das informações
        </h2>
        <p>
          As informações recolhidas são utilizadas exclusivamente para fins de
          comunicação, inscrição e melhoria dos nossos serviços. Nunca vendemos
          ou partilhamos os seus dados com terceiros sem o seu consentimento.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">
          3. Cookies
        </h2>
        <p>
          O nosso site utiliza cookies para melhorar a experiência do utilizador
          e analisar o tráfego. Pode desativar os cookies nas definições do seu
          navegador, mas isso poderá afetar algumas funcionalidades do site.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">
          4. Proteção dos dados
        </h2>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais para
          proteger os seus dados contra acesso não autorizado, alteração ou
          destruição.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">
          5. Direitos do utilizador
        </h2>
        <p>
          O utilizador tem o direito de aceder, corrigir ou eliminar os seus
          dados pessoais a qualquer momento. Para exercer estes direitos,
          contacte-nos através do endereço de e-mail indicado no nosso site.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">
          6. Alterações à política
        </h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política de Privacidade a
          qualquer momento. As alterações serão publicadas nesta página com a
          data de revisão atualizada.
        </p>

        <p className="mt-10 text-center text-gray-600 italic">
          Última atualização: Outubro de 2025
        </p>
      </div>
    </div>
  );
}

export default Privacy;
