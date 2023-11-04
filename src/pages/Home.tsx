import MessageListItem from '../components/MessageListItem';
import { useState } from 'react';
import { Message, getMessages } from '../data/messages';
import {
  IonContent,
  IonHeader,IonToolbar,IonTitle,IonAlert,
  IonPage,
  IonInput, IonItem,IonLabel,IonButton,
  useIonToast,
  useIonLoading,
} from '@ionic/react';
import './Home.css';
import { useHistory } from 'react-router';
const Home: React.FC = () => {

  const history = useHistory();
  const [Usr, setUsr] = useState('');
  const [Pwd, setPwd] = useState('');
  const Users = [
    {name:'admin',pwd:'123'},{name:'nou',pwd:'456'}
  ]
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



    const handleLogin = () => {
      try {
       // await login();
       let checkUser =  Users.find(x=>x.name==Usr && x.pwd==Pwd);
       
       if (checkUser){
         history.push({pathname:'/ticket',state:{name:checkUser.name}});
         //showToast({ message: "Login Success." , duration: 2000});
       }
       else{
        showToast({ message: "Login Fail." , duration: 2000});
       }

      } catch (err) {
        console.log('Error logging in:', err);
      }
    };

  return (
    <IonPage id="home-page">
     
      
      <IonContent fullscreen>
     
      <center><h2>Login to Ticket Checking</h2></center>
      <form style={{marginTop:'20%',padding:10}}>
      
      <IonInput label="Username"  value={Usr}
        onIonInput={(e: any) => setUsr(e.target.value)} labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>
      <br/>
      <IonInput   type='password' value={Pwd} onIonInput={(e: any) => setPwd(e.target.value)} label="Password" labelPlacement="floating" fill="outline" placeholder="Enter text"></IonInput>

      <div className="ion-text-center">
              <IonButton size="large" expand="block" onClick={handleLogin}  >
                Login
              </IonButton>
      </div>
      </form>
    
           

        
   
      </IonContent>
    </IonPage>
  );
};

export default Home;
