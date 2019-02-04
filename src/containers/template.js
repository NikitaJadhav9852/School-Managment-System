
  /*
    rno:'',
    fname:'',
    lname:'',
    sfname:'',
    smname:'',
    bdate:'',
    gmail:'',
    pwd:'',
    contactno:'',
    gender:'',
    address:'',
    country:'',
    city:'',
  }

    handleChange = event => {
      this.setState({ rno: event.target.value ,
                      fname:event.target.value,
                      lname:event.target.value,
                      sfname:event.target.value,
                      smname:event.target.value,
                      badte:event.target.value,
                      gmail:event.target.value,
      });
    }

    handleSubmit = event => {
      event.preventDefault();

      const user = {
        rno: this.state.rno
      };
      console.log(user)
      axios.post('http://127.0.0.1:8000/api/', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
*/














/*
case 'put':
return axios.put(`http://127.0.0.1:8000/api/${loginID}/`,{
uname : uname,
pwd : pwd
})
.then(res => console.log(res))
//            .catch(error =>console.err(error));
}
*/
