package com.example.adrian.shoppinglistappandroid;

/**
 * Created by Adrian on 1/11/2017.
 */

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Created by Belal on 8/6/2015.
 */
public class RegisterUserClass {

    public String sendPostRequest(String requestURL,
                                  String username,
                                  String password,
                                  String email,
                                  String firstName,
                                  String lastName) {

        String result = "";
        try {
            OkHttpClient client = new OkHttpClient();

            RequestBody body = new FormBody.Builder().add("username", username)
                                                     .add("password", password)
                                                     .add("email", email)
                                                     .add("firstName", firstName)
                                                     .add("lastName", lastName)
                                                     .build();
            Request request = new Request.Builder()
                    .url(requestURL)
                    .post(body)
                    .build();
            Response response = client.newCall(request).execute();
            result = response.body().string();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return result;
    }
}