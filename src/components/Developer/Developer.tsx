import styles from './Developer.module.scss';

interface IDeveloper {
  avatar: string;
  firstName: string;
  lastName: string;
  github: string;
  role: string;
  contribution: string;
}

function Developer({
  avatar,
  firstName,
  lastName,
  github,
  role,
  contribution,
}: IDeveloper) {
  return (
    <div className={styles.developer}>
      <img src={avatar} alt="avatar" />
      <div className={styles.info}>
        <p className={styles.name}>
          <a href={github}>
            {firstName} <br />
            {lastName}
          </a>
        </p>
        <p className={styles.role}>{role}</p>
        <p className={styles.contribution}>{contribution}</p>
      </div>
    </div>
  );
}

export default Developer;
