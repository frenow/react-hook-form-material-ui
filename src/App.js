import React from "react";
import { 
  Button, 
  Typography, 
  FormControlLabel,
  Checkbox,
  Switch,  
  Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from 'react-hook-form';

import { InputText } from "./components/Form/InputText";
import { InputTextMask } from "./components/Form/InputTextMask";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const cadastroFormSchema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório.').min(3, 'No mínimo 3 caracteres.'),
  cnpj: yup.string().required('CNPJ obrigatório.'),
  endereco: yup.string().required('Endereço obrigatório.'),
  numero: yup.number().required('Número obrigatório.'),
  cep: yup.string().required('CEP obrigatório.').min(9, 'CEP inválido.'),
  email: yup.string().required('E-mail obrigatório.').email('E-mail inválido.'),
  password: yup.string().required('Senha obrigatória.').min(6, 'No mínimo 6 caracteres.'),
})


const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function App(){

  const { register, handleSubmit, errors = null } = useForm({
    resolver: yupResolver(cadastroFormSchema)   
})

  const classes = useStyles();

  const handleSignIn = e => {
    console.log(e);
  };

  return (
    <Container component="main" maxWidth="xs">
      
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
         <form className={classes.form} onSubmit={handleSubmit(handleSignIn)}>

         <InputText
            id="nome"
            label="Nome/Razão"
            name="nome"
            autoFocus={true}
            register={register}
            error={errors.nome}
            errorMsg={errors.nome && errors.nome.message}
         />

         <InputTextMask
           id="cnpj"
           label="CNPJ"
           name="cnpj"
           autoFocus={false}
           register={register}
           error={errors.cnpj}
           errorMsg={errors.cnpj && errors.cnpj.message}
           mask="99.999.999/9999-99"
         />

          <InputText
            id="endereco"
            label="Endereço"
            name="endereco"
            autoFocus={false}
            register={register}
            error={errors.endereco}
            errorMsg={errors.endereco && errors.endereco.message}
         />

          <InputText
            id="numero"
            label="Número"
            name="numero"
            autoFocus={false}
            register={register}
            error={errors.numero}
            errorMsg={errors.numero && errors.numero.message}
         />

        <InputTextMask
           id="cep"
           label="CEP"
           name="cep"
           autoFocus={false}
           register={register}
           error={errors.cep}
           errorMsg={errors.cep && errors.cep.message}
           mask="99999-999"
         />                      

          <InputText
            id="email"
            label="E-mail"
            name="email"
            autoFocus={false}
            register={register}
            error={errors.email}
            errorMsg={errors.email && errors.email.message}
         />

          <InputText
            id="password"
            label="Senha"
            name="password"
            autoFocus={false}
            register={register}
            error={errors.password}
            errorMsg={errors.password && errors.password.message}
         />

              <FormControlLabel
                control={
                  <Checkbox
                    name="check"
                    color="primary"
                    inputRef={register}
                  />
                }
                label="Check"
              />    

              <FormControlLabel
                control={
                  <Switch
                    name="switch"
                    color="primary"
                    inputRef={register}
                  />
                }
                label="Switch"
              />                   
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Salvar
          </Button>
        </form>
      </div>
    </Container>
  );
}