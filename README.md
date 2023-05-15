

<p align="center">
    <img src="public\projetoFinanceiro.gif" alt="Semana Transformação.DEV #01" />
</p>

<p align="center">
 Repositório Bitcent <b>versão completa</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TDEV-01-blue" alt="Semana Transformação.DEV #01" />
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue" alt="License">   
</p>

<br>

## Tecnologias

Lista de tecnologias utilizadas no projeto:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Mantine](https://mantine.dev/)

## Executando o projeto

1. Clone o repositório:

```bash
$ git clone https://github.com/transformacaodev/bitcent
$ cd bitcent
```

2. Crie um projeto no Firebase e ative o Firestore e Autenticação com Google.

- Permissões do Firestore:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
    	allow read, write: if false;
    }

    match /financas/{email}/transacoes/{id} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
    
    match /usuarios/{email} {
  		allow read: if (request.auth != null && request.auth.token.email == email);
      allow write: if (request.auth != null && request.auth.token.email == email);
    }
  }
}
```




3. É preciso criar um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_API_KEY=
```
Usar as credenciais do seu projeto no Firebase.

4. Dentro da pasta do projeto, execute os comandos abaixo:

```bash
# Instalar as dependências
$ npm install

# Iniciar o projeto
$ npm run dev
```
O app estará disponível no endereço http://localhost:3000.

## Sobre o Projeto

Bitcent é uma aplicação web para controle de finanças pessoais com landing page e dashboard. O projeto utiliza o Firebase para autenticação e armazenamento de dados.

Projeto foi desenvolvido durante a **[Semana Tranformação.DEV](https://transformacao.dev/)**, que ocorreu nos dias 8 a 12 de Maio de 2023.

O Bitcent utiliza uma variedade de tecnologias modernas, incluindo:

React e Next.js: Essas poderosas bibliotecas JavaScript permitem criar interfaces de usuário dinâmicas e responsivas, proporcionando uma experiência fluida aos usuários.

Firebase: Usamos o Firebase como nossa plataforma de autenticação e armazenamento de dados. Ele fornece recursos seguros e escaláveis, garantindo a proteção dos dados dos usuários e facilitando o acesso a eles.

TypeScript: Optamos pelo TypeScript para trazer mais segurança e produtividade ao desenvolvimento. Com seu sistema de tipos estáticos, podemos evitar erros comuns e facilitar a manutenção do código.

TailwindCSS: Utilizamos o TailwindCSS como framework de estilização. Com sua abordagem utilitária, podemos criar estilos personalizados de forma eficiente, acelerando o desenvolvimento e oferecendo flexibilidade de design.

Mantine: Para agilizar o desenvolvimento da interface do usuário, incorporamos a biblioteca de componentes React Mantine. Ela oferece uma ampla variedade de elementos prontos para uso, permitindo criar uma interface moderna e elegante.

O Bitcent apresenta uma landing page atraente, destacando seus principais recursos, e um dashboard intuitivo para visualização detalhada das receitas, despesas e saldo financeiro. Além disso, garantimos a segurança dos dados dos usuários com a autenticação segura fornecida pelo Firebase.

Estou muito satisfeito com o resultado e orgulhoso da equipe envolvida nesse projeto. A colaboração e o aprendizado contínuo foram fundamentais para entregar uma solução de alta qualidade.

Se você é um desenvolvedor interessado, fique à vontade para conferir o projeto completo no meu repositório do GitHub: [link do repositório]. E se tiver alguma pergunta ou sugestão, não hesite em entrar em contato.

Vamos juntos rumo a um controle financeiro mais eficiente com o Bitcent!

## License

Esse projeto está sob a [licença MIT](LICENSE.md).
