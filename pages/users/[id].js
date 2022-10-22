import styles from '../../styles/User.module.scss';
import { useRouter } from 'next/router';
import MainContainer from '../../components/MainContainer';

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <div className={styles.user}>
        <h1>User id {query.id}</h1>
        <p>Username - {user.name}</p>
      </div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  // console.log(params); // can be seen in editor console !!!
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();

  return {
    props: { user } // will be passed to the page component as props
  };
}
