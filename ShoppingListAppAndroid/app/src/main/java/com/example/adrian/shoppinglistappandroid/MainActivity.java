package com.example.adrian.shoppinglistappandroid;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void invokeLogin(View view){
        Intent intent = new Intent(MainActivity.this, LoginActivity.class);
        finish();
        startActivity(intent);
    }

    public void invokeRegister(View view){
        Intent intent = new Intent(MainActivity.this, RegisterActivity.class);
        finish();
        startActivity(intent);
    }
}
