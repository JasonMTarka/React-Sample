import PasswordForm from "./PasswordForm";

function PasswordGen(props) {
  return (
    <div>
      <div>
        <h3>Password Generator</h3>
        <p>
          Select your options, then click 'Create Password' to generate your
          password!
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <PasswordForm />
      </div>
    </div>
  );
}

export default PasswordGen;
