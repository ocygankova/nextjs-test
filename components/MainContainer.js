import CustomNavLink from './CustomNavLink';
import Head from 'next/head';

function MainContainer({ children, keywords }) {
  return (
    <>
      <Head>
        <meta keywords={`get user data ${keywords}`} />
        <title>Main page</title>
      </Head>

      <div className="navbar">
        <CustomNavLink href={'/'} text={'Main'} />
        <CustomNavLink href={'/users'} text={'Users'} />
      </div>

      <div>{children}</div>

      <style jsx>
        {`
          .navbar {
            background: teal;
            padding: 15px;
          }
        `}
      </style>
    </>
  );
}

export default MainContainer;
