// dto/ClientUpsertDto.java
package ch.henr.multui.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record ClientUpsertDto(
        @NotBlank
        @Size(max = 255, message = "Name must not exceed 255 characters")
        String name,
        @NotBlank
        @Email
        @Size(max = 255, message = "Email must not exceed 255 characters")
        String email) {
}