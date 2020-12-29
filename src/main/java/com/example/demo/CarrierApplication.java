package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.FileInputStream;
import java.io.InputStream;
import java.io.IOException;

@SpringBootApplication
public class CarrierApplication {

	public static void main(String[] args) throws IOException {
		SpringApplication.run(CarrierApplication.class, args);
	}

}
