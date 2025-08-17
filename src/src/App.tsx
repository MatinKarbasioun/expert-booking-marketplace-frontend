import UserInformation from './components/user_info/UserInformation.tsx'
import ParentContainer from './components/header/Container.tsx'
import './App.css'

function App() {
  const reservationSteps = [
    'Your Details',
    'My detail',
    'third detail'
  ];

  return (
    <div className="app-container">
      <ParentContainer steps={reservationSteps}>
        {[
          <UserInformation key="unique_1" />, 
          <UserInformation key="unique_2" />,
          <UserInformation key="unique_3" />
          ]}
      </ParentContainer>
    </div>
  );
}

export default App;