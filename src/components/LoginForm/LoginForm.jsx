import { Form, Label } from './LoginForm.styled';

export const LoginForm = () => {
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
          Email
          <input type="email" name="email" />
        </Label>
        <Label>
          Password
          <input type="password" name="password" />
        </Label>
        <button type="submit">Log in</button>
      </Form>
    </>
  );
};
