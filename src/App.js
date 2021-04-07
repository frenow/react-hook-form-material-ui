import React from "react";
import { Button, TextField, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from 'react-hook-form';
import InputMask from "react-input-mask";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const userFormSchema = yup.object().shape({
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
    resolver: yupResolver(userFormSchema)   
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
         <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="nome"
            label="Nome/Razão"
            name="nome"
            autoFocus
            inputRef={register}
            helperText={errors.nome && errors.nome.message}
            error={!!errors.nome}
          />           
                   
          <InputMask
              mask="99.999.999/9999-99"
              maskChar=" "
          >
          {() => <TextField
            variant="outlined"
            margin="normal"
             id="cnpj"
            label="CNPJ"
            name="cnpj"
            inputRef={register}
            helperText={errors.cnpj && errors.cnpj.message}
            error={!!errors.cnpj}
          /> }
          </InputMask>   

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="endereco"
            label="Endereço"
            name="endereco"
            inputRef={register}
            helperText={errors.endereco && errors.endereco.message}
            error={!!errors.endereco}
          />  

          <TextField
            variant="outlined"
            margin="normal"
            id="numero"
            label="Número"
            name="numero"
            inputRef={register}
            helperText={errors.numero && errors.numero.message}
            error={!!errors.numero}
          /> 

          <InputMask
              mask="99999-999"
              maskChar=" "
            >
          {() => <TextField
            variant="outlined"
            margin="normal"
             id="cep"
            label="CEP"
            name="cep"
            inputRef={register}
            helperText={errors.cep && errors.cep.message}
            error={!!errors.cep}
          /> }
          </InputMask>                        

          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            inputRef={register}
            helperText={errors.email && errors.email.message}
            error={!!errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={register}
            helperText={errors.password && errors.password.message}
            error={!!errors.password}
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