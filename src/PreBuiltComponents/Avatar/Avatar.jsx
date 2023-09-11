import React from "react";

//styles import
import styles from "./Avatar.module.css";
import ComponentDisplay from "../../Components/Component display/ComponentDisplay";
import CodeShare from "../../Components/Code Share/CodeShare";

const Avatar = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.avatar__header}>Avatar</h1>
        <h2 className={styles.avatar__subHeading}>
          The Avatar component is used to represent a user, and displays the
          profile picture, initials or fallback icon.
        </h2>

        {/* avatar Usages */}

        <h1 className={styles.title}>Profile Avatar</h1>
        <p className={styles.about__title}>
          CSSENSE includes Profile avatar to save our time use default avatar
        </p>
        <ComponentDisplay>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar"
            alt=""
          />
        </ComponentDisplay>
        <p className={styles.copy__code__des}>
          To achieve the above buttons, you need to follow the following code:
        </p>
        <CodeShare
          highlight={"3"}
          code={`
                      < -- For Default Avatar -->
          <img src="/Images/me 2.jpg" className="avatar" alt="" />
          `}
        />
        {/* avatar Usages */}

        {/* avatar Usages */}

        <h1 className={styles.title}>Avatar With Sizes</h1>
        <p className={styles.about__title}>
          We have pre defined some avatar of a specific size
        </p>
        <ComponentDisplay>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar-sm"
            alt=""
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar-md"
            alt=""
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar-lg"
            alt=""
          />
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
            className="avatar"
            alt=""
          />
        </ComponentDisplay>
        <p className={styles.copy__code__des}>
          To achieve the above buttons, you need to follow the following code:
        </p>
        <CodeShare
          highlight={"3 , 5 , 7, 9"}
          code={`
                      < -- For Small Size Avatar -->
          <img src="/Images/me 2.jpg" className="avatar-sm" alt="" />
                      < -- For Medium Size Avatar -->
          <img src="/Images/me 2.jpg" className="avatar-md" alt="" />
                      < -- For Larger Size Avatar -->
          <img src="/Images/me 2.jpg" className="avatar-lg" alt="" />
                      < -- For Default Avatar -->
          <img src="/Images/me 2.jpg" className="avatar" alt="" />
        `}
        />
        {/* avatar Usages */}
      </div>
    </div>
  );
};

export default Avatar;
