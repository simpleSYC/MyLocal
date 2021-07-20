const F_ = {
  Pass_REST: function (emalko) {
    firebase
      .auth()
      .sendPasswordResetEmail(emalko)
      .then(function () {
        alert("if eimail and/or invaid code are ok,\nwe will send automated paswor reset email to \n" + emalko + "\n if still any problem contact devolper \n REF# " + REF);
        // Email sent.
      })
      .catch(function (error) {
        alert(
          "Cant sent email to \n" +
            emalko +
            "\nWe have ERROR here... \n" +
            "PLSS cheak email and/or invite code for typing errors \n" +
            "Or maybe this acc is alredy deleted by admin/devolper \n\n" +
            "If still any problem, you can contact admin/devolper "
        );
        // An error happened.
      });
  },

  Send_verification_email: function () {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  },
  Loginski_Statusiranje: function () {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        document.getElementById("user_div").style.display = "contents";
        document.getElementById("user_div").style.width = 37 + "%";
        START_SCRN["DIV"].remove();

        KOJeOVOJ(firebase.auth().currentUser);
      }
    });
  },

  login: function (Login) {
    firebase
      .auth()
      .signInWithEmailAndPassword(Login["email"].value, Login["pass"].value)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error : " + errorMessage);
        // ...
      });
  },

  logout: function () {
    firebase.auth().signOut();
    location.reload();
  },
  EROR_: function (a) {
    window.alert(a);
  },
  Valitacij_NEW_AKK: function (S_) {
    let Parametrite = {
      username: {
        status: F_.IsOK_name(S_["username"].value)[0],
        desc: F_.IsOK_name(S_["username"].value)[1],
      },
      pass: {
        status: F_.isPAS_dlg(S_["pass"].value)[0],
        desc: F_.isPAS_dlg(S_["pass"].value)[1],
      },
    };

    if (!Parametrite["username"]["status"]) {
      this.EROR_(Parametrite["username"]["desc"]);
    } else if (!Parametrite["pass"]["status"]) {
      this.EROR_(Parametrite["pass"]["desc"]);
    } else if (!S_["email"].value) {
      this.EROR_("Ovaj email is empty");
    } else {
      F_.Cekiraj_DB_ovaj_user(S_);
    }
  },

  isPAS_dlg: function (a) {
    let TO_RETURN = [true, true];
    if (a.length < 7) {
      TO_RETURN[0] = false;
      TO_RETURN[1] = "Password must be minium 8 charakter long";
    }
    return TO_RETURN;
  },

  IsOK_name: function (a) {
    let X = ["%", "/", "#", ".", ",", " ", "[", '"', "`", "]", "USER"];
    let TO_RETURN = [true, false];
    if (a.length > 3) {
      for (i in X) {
        if (a.includes(X[i])) {
          TO_RETURN = [false, "This charakter [ " + X[i] + " ]is unsuported"];
          break;
        }
      }
    } else {
      TO_RETURN = [false, "username must be minium 4 letthers long"];
    }
    return TO_RETURN;
  },

  Cekiraj_DB_ovaj_user: function (P) {
    DB.child("REG@/user/" + P["username"].value)
      .once("value")
      .then(function (snapshot) {
        if (snapshot.val() != undefined) {
          F_.EROR_("This username is alredy taken.. \ntry somthink else");
        } else {
          F_.isOK_EMAIL(P["email"].value); //cekira pass
        }
      });
  },

  isOK_EMAIL: function (a) {
    let T_email = this.email_u_tockast(a);

    F_.Cekiraj_DB_ovaj_email(T_email);
  },

  email_u_tockast: function (a) {
    let R = "";
    for (i in a) {
      if (a[i] == ".") {
        R = R + ",";
      } else {
        R = R + a[i];
      }
    }
    return R;
  },

  Cekiraj_DB_ovaj_email: function (a) {
    let S_ = START_SCRN["inputo"]["S_"];
    DB.child("REG@/email/" + a)
      .once("value")
      .then(function (snapshot) {
        if (snapshot.val() != undefined) {
          F_.EROR_("THERE is alredy acc with this email \n " + S_["email"].value + "\n need new unused emill adress for Sing Up!!");
        } else {
          F_.CR8_NEW_ACC(S_);
        }
      });
  },

  CR8_NEW_ACC: function (S_) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(S_["email"].value, S_["pass"].value)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert(errorMessage);
        // ...
      });
  },
};

F_.Loginski_Statusiranje();
