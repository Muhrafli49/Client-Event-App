import React, {useState} from 'react';
import { Container, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EAlert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import Form from './form';
import { postData } from '../../utils/fetch';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/actions';

const PageSignin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [alert, setAlert] = useState({
    status: false,
    message: '',
    type: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const res = await postData(`/cms/auth/signin`, form);

    dispatch(userLogin(res.data.data.token, res.data.data.role))
    setIsLoading(false);
    navigate('/')

    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data.msg);
      setAlert({
        status: true,
        message: err.response.data.msg ?? 'Internal server error',
        type: 'danger'
      });
    }

  };

  return (
    <Container md={12} className='my-5'>
      <div className="m-auto" style={{ width: '50%' }}> 
        {alert.status && <EAlert message={alert.message} type={alert.type}/>}
      </div>
      <Card style={{ width: '50%' }} className='m-auto mt-5'>
        <Card.Body>
          <Card.Title className='text-center'>Form Signin</Card.Title>
          <Form
            form={form}
            handleChange={handleChange}
            isLoading={isLoading}
            handleSubmit={handleSubmit}
          />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
