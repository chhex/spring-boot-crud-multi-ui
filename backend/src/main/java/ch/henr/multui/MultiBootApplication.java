package ch.henr.multui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "ch.henr.multui")
public class MultiBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(MultiBootApplication.class, args);
	}
}
