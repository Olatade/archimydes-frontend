import Modal from 'react-modal';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import {BiArrowBack} from 'react-icons/bi';
import {MdClose} from 'react-icons/md';
import {useSelector} from 'react-redux';


const customStyles = {
  content: {
    top: '50px',
    left: 0,
    width: '100%',
    height: '100%',
    background: '#F3F4F6'
  },
};

// function to hide the login error message when the close icon is clicked
function hide(e){
  // get the parent of the close icon
  if(e.target.parentElement.classList.contains('form-message__close')){
    const parent = getClosest(e.target.parentElement, '.form-message');
    parent.classList.add('hide'); // add the hide class to make it disappear
  }
}

// function to get the closest element with a particular class
const getClosest = function (elem, selector) {

	// Element.matches() polyfill
	if (!Element.prototype.matches) {
	    Element.prototype.matches =
	        Element.prototype.matchesSelector ||
	        Element.prototype.mozMatchesSelector ||
	        Element.prototype.msMatchesSelector ||
	        Element.prototype.oMatchesSelector ||
	        Element.prototype.webkitMatchesSelector ||
	        function(s) {
	            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
	                i = matches.length;
	            while (--i >= 0 && matches.item(i) !== this) {}
	            return i > -1;
	        };
	}

	// Get the closest matching element
	for ( ; elem && elem !== document; elem = elem.parentNode ) {
		if ( elem.matches( selector ) ) return elem;
	}
	return null;

};

Modal.setAppElement('#root');
const UpdateUser = () =>{
  const {UpdateUser} = useSelector(state => state.modal);

  return(
    <Modal isOpen={UpdateUser} style={customStyles}>

    <Formik
      initialValues={{
        name: '',
        email: '',
        role: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string().required(`Required`),
        email: Yup.string().email('Invalid email').required(`Required`),
        role: Yup.string().required('Required')
      })}
    
    onSubmit={ async(values, functions) =>{
      // do something on submit
    }}
    >
      {({ values, errors, isSubmitting, isValidating }) => (
      <Form className=" border border-gray-200 rounded bg-white md:w-96 mx-auto mt-9 px-4 py-4">
        <div className="mb-4">
          <h1 className="flex items-center text-primary font-semibold text-base md:text-xl" ><BiArrowBack/> <span className="pl-4">Update User</span></h1>
        </div>
        {/* Email */}
        <div className="grid gap-y-2">
          <div>
            <div className="form-group">
              <label className="block mb-2 text-sm text-gray-600 font-bold" htmlFor="name">Name</label>
              <Field className="w-full px-3 py-1 font-bold placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" name="name" type="text" placeholder='Name' />
            </div>
            <ErrorMessage render={msg => <div className="text-red-700 text-xs mt-1">{msg}</div>} name="name" />
          </div>

          <div>
            <div className="form-group">
              <label className="block mb-2 text-sm text-gray-600 font-bold" htmlFor="email">Email</label>
              <Field className="w-full px-3 py-1 font-bold placeholder-gray-300 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300" name="email" type="text" placeholder='Email' />
            </div>
            <ErrorMessage render={msg => <div className="text-red-700 text-xs mt-1">{msg}</div>} name="email" />
          </div>  

          <div>
            <div className="form-group">
              <label className="block mb-2 text-sm text-gray-600 font-bold" htmlFor="role">Role</label>
              <Field className="border w-full font-bold border-gray-300 placeholder-gray-300 focus:ring-indigo-500 focus:border-indigo-500 h-full pl-2 pr-12 pt-2 pb-2" name="role" as="select">
              {/* {profile.sex ? <option value={profile.sex}>{profile.sex}</option> : <option value="">-</option>} */}
            
              {['Admin', 'User'].map( sex => ('seex' === 'sex' ? '' : <option value={sex} key={sex}>{sex}</option> ))}
              </Field>
            </div>
            <ErrorMessage render={msg => <div className="text-red-700 text-xs mt-1">{msg}</div>} name="role" />
          </div>
      </div>

  
        <div id="login-message" className="form-message mt-4 hide">

          <div className="form-message__top ">
            <div className="form-message__notification">
              <span className="form-message__icon"><AiOutlineExclamationCircle/></span>
              <p className="form-message__title">Error</p>
            </div>
            <span onClick={(e) => hide(e)} className="form-message__close"><MdClose/></span>
          </div>

          <div className="form-message__message">
            User not found. <a href="https://alumni.abuad.edu.ng/signup">Click here</a> to signup or click "forgot your password" below to retrieve your password.
          </div>
        </div>
        
        <div className="flex flex-col mt-3">
          <button id="login-submit" className="py-2 text-sm" type="submit">Cancel</button>
          <button id="login-submit" className=" bg-green-800 text-white shadow-md text-sm py-2 rounded-md" type="submit">Update User</button>
        </div>
      </Form>)}
    </Formik>
    </Modal>
  )
}

export default UpdateUser;