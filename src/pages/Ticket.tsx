import MessageListItem from '../components/MessageListItem';
import { useState , } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,IonToolbar,IonTitle,IonAlert,
  IonPage,
  IonInput, IonItem,IonLabel,IonButton,
  useIonToast,
  useIonLoading,IonList,IonImg,IonThumbnail
} from '@ionic/react';
import './Ticket.css';
import { useLocation,useHistory  } from 'react-router';


const Ticket: React.FC = () => {
  const history = useHistory();
const location : any = useLocation();
const username  = location.state.name;

const [Seach, setSeach] =useState('');
const [data, setData] = useState({});
  

  const [showLoading, hideLoading] = useIonLoading();
  const [showToast ] = useIonToast();

 
  // const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log()
  //   e.preventDefault();
  //   await showLoading();
  //   try {
  //     //await supabase.auth.signIn({ email });
  //     await showToast({ message: 'Check your email for the login link!' });
  //   } catch (e: any) {
  //     await showToast({ message: e.error_description || e.message , duration: 5000});
  //   } finally {
  //     await hideLoading();
  //   }
  // };


//   e.preventDefault();
//   history.push('/dashboard/users/1');
    const handleQr = () =>{
      history.push('/Qr');
    }

    const handleSeach = () => {
      try {
        fetch('https://jsonplaceholder.typicode.com/todos/'+ Seach)
        .then(res => res.json())
        .then(json => setData(json))
       // await login();
       

      } catch (err : any) {
        showToast({ message: err , duration: 2000});
       
      }
    };

    const updateTicket = () => {
        try {
          fetch('https://jsonplaceholder.typicode.com/todos/'+ Seach)
          .then(res => res.json())
          .then(json => setData(json))
         // await login();
         
  
        } catch (err : any) {
          showToast({ message: err , duration: 2000});
         
        }
      };

  return (
    <IonPage id="home-page">
     
     <IonHeader>
        <IonToolbar>
          <IonTitle>user : {username}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
     
      <center><h2>Checking Ticket</h2></center>
      <form style={{marginTop:'10%',padding:10}}>
      
      <IonInput style={{fontSize: '1.5rem'}}  type="number" placeholder="0000"  value={Seach}
        onIonInput={(e: any) => setSeach(e.target.value)} fill="outline" ></IonInput>
  
      
      <div className="ion-text-center">
              <IonButton size="large" expand="block" onClick={handleSeach}  >
                Seach
              </IonButton>
              <IonButton size="large" expand="block" onClick={handleQr}  >
                QR
              </IonButton>
      </div>
      </form>
    
    <div style={{marginTop:'10%',padding:20}}>
        <h2>Msisdn : {data.title}</h2>
        <h3>UserId : {data.userId}</h3>
        <h3>Tikcet : {data.completed==false ? 'No Get Card':'Aleady get Card'}</h3> 
        { data.completed == true &&
        <IonButton>Get Card</IonButton>
        }
    </div>
      
   
      </IonContent>
    </IonPage>
  );
};

export default Ticket;
