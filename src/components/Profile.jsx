
export const Profile = () => {
    return (
      <>
        <h1>Profile</h1>
            <ProfileCard
                name="Pankaj"
                age={30}
                greeting={
                    <div>
                        <strong>
                            Hi Pankaj, have a wonderful day!
                        </strong>
                    </div>
                }
            >  
                <p>Hobbies : Reading, Hiking</p>
                <button>Contact</button>
            </ProfileCard>
      </>
    );
}

