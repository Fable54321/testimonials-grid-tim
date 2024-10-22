import Card_A from '../Card-a/Card-a';
import Card_B from '../Card-b/Card-b';
import Card_C from '../Card-c/Card-c';
import Card_D from '../Card-d/Card-d';
import Card_E from '../Card-e/Card-e';
import styles from './App.module.css';


const App = () => {
  return (
    
      <>
      <div className={styles.wrapper}>

            <div className={styles['card-a']}>
              <Card_A />
            </div>
            <div className={styles['card-b']}>
              <Card_B />
            </div>
            <div className={styles['card-c']}>
              <Card_C />
            </div>
            <div className={styles['card-d']}>
              <Card_D />
            </div>
            <div className={styles['card-e']}>
              <Card_E />
            </div>
            
        
      </div>
      </>
    
  )
}

export default App
