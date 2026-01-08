import React from 'react'

function Cookies() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 md:px-20 py-16 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300">
      <h1 className="text-4xl md:text-6xl font-bold font-serif mb-12 p-20 text-center text-gray-800">
        Política de Cookies
      </h1>

      <div className="max-w-4xl text-gray-700 leading-relaxed space-y-6 text-justify bg-white/70 p-8 rounded-2xl shadow-md">
        <p>
          Utilizamos cookies para melhorar a experiência dos nossos utilizadores, analisar o tráfego do site e
          personalizar o conteúdo apresentado. Esta política explica o que são cookies, como os utilizamos e como
          pode geri-los no seu navegador.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">O que são cookies?</h2>
        <p>
          Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Estes
          ficheiros permitem reconhecer o utilizador, lembrar as suas preferências e melhorar a navegação.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">Como utilizamos cookies</h2>
        <p>
          Utilizamos cookies para diversas finalidades:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>Garantir o funcionamento correto do site.</li>
          <li>Recolher dados estatísticos de utilização para melhorar o serviço.</li>
          <li>Guardar as suas preferências de idioma ou sessão.</li>
          <li>Personalizar o conteúdo de acordo com os seus interesses.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">Gestão de cookies</h2>
        <p>
          Pode configurar o seu navegador para recusar cookies ou alertá-lo quando estes estão a ser utilizados. No
          entanto, ao desativar cookies, algumas funcionalidades do site podem não funcionar corretamente.
        </p>

        <h2 className="text-2xl font-semibold text-pink-700 mt-8">Alterações à política</h2>
        <p>
          Reservamo-nos o direito de atualizar esta Política de Cookies a qualquer momento. Recomendamos que consulte
          esta página regularmente para estar a par de quaisquer alterações.
        </p>

        <p className="italic mt-8">
          Última atualização: Outubro de 2025
        </p>
      </div>
    </div>
  )
}

export default Cookies
