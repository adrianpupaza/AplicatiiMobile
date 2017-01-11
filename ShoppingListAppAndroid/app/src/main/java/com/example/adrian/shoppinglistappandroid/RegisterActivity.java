package com.example.adrian.shoppinglistappandroid;

import android.app.ProgressDialog;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class RegisterActivity extends AppCompatActivity implements View.OnClickListener{

    private EditText editTextUsername;
    private EditText editTextPassword;
    private EditText editTextEmail;
    private EditText editTextFirstName;
    private EditText editTextLastName;

    private Button buttonRegister;

    private static final String REGISTER_URL = "http://adrianpupaza.000webhostapp.com/register.php";


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        editTextUsername = (EditText) findViewById(R.id.editTextUserName);
        editTextPassword = (EditText) findViewById(R.id.editTextPassword);
        editTextEmail = (EditText) findViewById(R.id.editTextEmail);
        editTextFirstName = (EditText) findViewById(R.id.editTextFirstName);
        editTextLastName = (EditText) findViewById(R.id.editTextLastName);

        buttonRegister = (Button) findViewById(R.id.buttonRegister);

        buttonRegister.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if(v == buttonRegister){
            registerUser();
        }
    }

    private void registerUser() {
        String username = editTextUsername.getText().toString().trim().toLowerCase();
        String password = editTextPassword.getText().toString().trim().toLowerCase();
        String email = editTextEmail.getText().toString().trim().toLowerCase();
        String firstName = editTextFirstName.getText().toString().trim().toLowerCase();
        String lastName = editTextLastName.getText().toString().trim().toLowerCase();

        register(username,password,email, firstName, lastName);
    }

    private void register(final String username, final String password, final String email, final String firstName, final String lastName) {
        class RegisterUser extends AsyncTask<String, Void, String>{
            private ProgressDialog loading;
            private RegisterUserClass ruc = new RegisterUserClass();


            @Override
            protected void onPreExecute() {
                super.onPreExecute();
                loading = ProgressDialog.show(RegisterActivity.this, "Please Wait",null, true, true);
            }

            @Override
            protected void onPostExecute(String s) {
                super.onPostExecute(s);
                loading.dismiss();
                Toast.makeText(getApplicationContext(), s, Toast.LENGTH_LONG).show();
                if(s.equalsIgnoreCase("Successfully registered")) {
                    Intent intent = new Intent(RegisterActivity.this, LoginActivity.class);
                    finish();
                    startActivity(intent);
                }
            }

            @Override
            protected String doInBackground(String... params) {
                return ruc.sendPostRequest(REGISTER_URL,username,password,email,firstName,lastName);
            }
        }

        RegisterUser ru = new RegisterUser();
        ru.execute(username,password,email, firstName, lastName);
    }
}