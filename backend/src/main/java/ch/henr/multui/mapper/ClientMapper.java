// mapper/ClientMapper.java
package ch.henr.multui.mapper;

import org.mapstruct.*;

import ch.henr.multui.dto.*;
import ch.henr.multui.entity.Client;

@Mapper(componentModel = "spring")
public interface ClientMapper {
    ClientDto toDto(Client entity);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "tenant", ignore = true)
    void updateEntityFromDto(ClientUpsertDto dto, @MappingTarget Client entity);
}
