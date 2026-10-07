package com.example.day21;

import android.app.Activity;
import android.os.Bundle;
import android.graphics.Color;
import android.view.Gravity;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends Activity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        LinearLayout layout = new LinearLayout(this);
        layout.setOrientation(LinearLayout.VERTICAL);
        layout.setGravity(Gravity.CENTER);
        layout.setPadding(30, 30, 30, 30);

        TextView title = new TextView(this);
        title.setText("Day 21 Calculator");
        title.setTextSize(26);
        title.setTextColor(Color.BLACK);
        title.setGravity(Gravity.CENTER);

        EditText first = new EditText(this);
        first.setHint("First number");
        first.setInputType(2);

        EditText second = new EditText(this);
        second.setHint("Second number");
        second.setInputType(2);

        Button add = new Button(this);
        add.setText("ADD");

        TextView result = new TextView(this);
        result.setText("Result: 0");
        result.setTextSize(22);
        result.setGravity(Gravity.CENTER);

        add.setOnClickListener(v -> {
            try {
                int a = Integer.parseInt(first.getText().toString());
                int b = Integer.parseInt(second.getText().toString());
                result.setText("Result: " + (a + b));
            } catch (Exception e) {
                result.setText("Enter valid numbers");
            }
        });

        layout.addView(title);
        layout.addView(first);
        layout.addView(second);
        layout.addView(add);
        layout.addView(result);

        setContentView(layout);
    }
}
