<?php

        error_reporting(E_ERROR | E_PARSE);

        // Email address verification, do not edit.

        $name= $_POST['name'];
        $email= $_POST['email'];
        $subject= $_POST['subject'];
        $phone= $_POST['phone'];
        $comments= $_POST['comment'];
        $verify= $_POST['verify'];
        
        function isEmail($email) {
        return(preg_match("/^[-_.[:alnum:]]+@((([[:alnum:]]|[[:alnum:]][[:alnum:]-]*[[:alnum:]])\.)+(ad|ae|aero|af|ag|ai|al|am|an|ao|aq|ar|arpa|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|biz|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|com|coop|cr|cs|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|in|info|int|io|iq|ir|is|it|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|name|nc|ne|net|nf|ng|ni|nl|no|np|nr|nt|nu|nz|om|org|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|pro|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)$|(([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5])\.){3}([0-9][0-9]?|[0-1][0-9][0-9]|[2][0-4][0-9]|[2][5][0-5]))$/i",$email));
        }
        
        if(trim($name) == '') {
        	echo '<div class="error_message">You must enter your name.</div>';
        	exit();
        } else if(trim($email) == '') {
        	echo '<div class="error_message"> Please enter a valid email address.</div>';
        	exit();
        } else if(trim($phone) == '') {
        	echo '<div class="error_message">Please enter a valid phone number.</div>';
        	exit();
        } else if(!is_numeric($phone)) {
        	echo '<div class="error_message">Phone number can only contain digits.</div>';
        	exit();
        } else if(!isEmail($email)) {
        	echo '<div class="error_message">You have enter an invalid e-mail address, try again.</div>';
        	exit();
        } else if(trim($subject) == '0') {
        	echo '<div class="error_message">Please Select Subject.</div>';
        	exit();
        }
        
        if(trim($subject) == '') {
        	echo '<div class="error_message">Please enter a subject.</div>';
        	exit();
        } else if(trim($comments) == '') {
        	echo '<div class="error_message">Please enter your message.</div>';
        	exit();
        } else if(!isset($verify) || trim($verify) == '') {
        	echo '<div class="error_message">Please enter the verification number.</div>';
        	exit();
        } else if(trim($verify) != '3') {
        	echo '<div class="error_message">The verification number you entered is incorrect.</div>';
        	exit();
        }
        
        if(get_magic_quotes_gpc()) {
        	$comments = stripslashes($comments);
        }
        
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;
        use PHPMailer\PHPMailer\Exception;
        
        require 'PHPMailer/Exception.php';
        require 'PHPMailer/PHPMailer.php';
        require 'PHPMailer/SMTP.php';
    
    // Instantiation and passing [ICODE]true[/ICODE] enables exceptions
        $mail = new PHPMailer(true);
        
     // Instantiation and passing [ICODE]true[/ICODE] enables exceptions
        $mail->SMTPDebug = 0; // Enable verbose debug output
        $mail->isSMTP(); // Set mailer to use SMTP
        $mail->Host = 'mail.saraswebtech.in'; // Specify main and backup SMTP servers
        $mail->SMTPAuth = true; // Enable SMTP authentication
        $mail->Username = 'mail@saraswebtech.in'; // SMTP username
        $mail->Password = 'Mail@$0102'; // SMTP password
        $mail->SMTPSecure = 'ssl'; // Enable TLS encryption, [ICODE]ssl[/ICODE] also accepted
        $mail->Port = 465; // TCP port to connect to

        //Recipients
        $mail->setFrom('mail@saraswebtech.in', 'civaglobal Website Contact Form');
        $mail->addAddress('saraswebtech@gmail.com', 'civaglobal'); // Add a recipient
        //$mail->addAddress('abc@abc.com'); // Name is optional

    	$mail->isHTML(true);
    	$mail->Subject='Form Submitted through Website: '.$_POST['subject'];
    	$mail->Body='<h3 align=left>Name :'.$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Phone: '.$_POST['phone'].'<br>Message: '.$_POST['comment'].'</h1>';
    	$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    

         //Send the message, check for errors
    	if(!$mail->send()) {
    	    echo 'Message could not be sent.';
    	    echo 'Mailer Error: ' . $mail->ErrorInfo;
    	} else {
    	    	echo "<fieldset>";
            	echo "<div id='success_page'>";
            	echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us.</p>";
            	echo "</div>";
            	echo "</fieldset>";
            	echo "<script type='text/javascript'>";
                echo "setTimeout(function(){ window.location.href = 'contact-pdi.html'; }, 3000);";  // Redirect after 3 seconds
                echo "</script>";
    	}
    ?>