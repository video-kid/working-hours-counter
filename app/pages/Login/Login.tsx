'use client';

import Field from '@/app/components/Form/partials/Field';
import { secrets } from '@/app/secrets';
import React from 'react';
import { useForm } from 'react-hook-form';

type LoginFormProps = {
  name: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>({
    mode: 'all',
  });
  console.log(errors);
  const onSubmit = (data: LoginFormProps) => {
    console.log(data);
  };
  // POST /v1/graphql HTTP/1.1
  // Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWI...
  // X-Hasura-Role: editor

  const authHandler = () => {
    fetch('https://working-hours-conter.hasura.app/api/rest/getusers', {
      method: 'POST',
      headers: new Headers({
        Authorization: secrets.tempAuth,
        'Content-Type': 'application/json',
      }),
    }).then(async (response) => {
      if (!response.ok) {
        throw new Error('err');
      }
      const resp = await response.json();
      return console.log(resp);
    });
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <Field
    //     label='Login'
    //     id='name'
    //     {...register('name', { required: true })}
    //   />
    //   <Field
    //     label='Pass'
    //     id='password'
    //     type='password'
    //     {...register('password', { required: true })}
    //   />
    // </form>
    <>
      <button onClick={() => authHandler()}>aaa</button>
    </>
  );
};

export default Login;
