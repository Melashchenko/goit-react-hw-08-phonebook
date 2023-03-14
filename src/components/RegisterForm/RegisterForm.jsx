import { Form, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventdefault();
    const form = e.currentTarget;

    console.log(form);

    form.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          Username
          <input type="text" name="name" />
        </Label>
        <Label>
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Register</button>
      </Form>
    </>
  );
};
