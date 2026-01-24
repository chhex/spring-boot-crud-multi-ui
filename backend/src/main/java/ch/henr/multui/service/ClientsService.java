package ch.henr.multui.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import ch.henr.multui.db.ClientsRepository;
import ch.henr.multui.dto.ClientUpsertDto;
import ch.henr.multui.entity.Client;
import ch.henr.multui.mapper.ClientMapper;
import ch.henr.multui.support.TenantHolder;

@Service
public class ClientsService {
    private final ClientsRepository repo;
    private final ClientMapper mapper;

    public ClientsService(ClientsRepository repo, ClientMapper mapper) {
        this.repo = repo;
        this.mapper = mapper;
    }

    @Transactional(readOnly = true)
    public List<Client> list() {
        return repo.findAllByTenant(TenantHolder.get());
    }

    @Transactional(readOnly = true)
    public Client get(Long id) {
        return repo.findByTenantAndId(TenantHolder.get(), id).orElseThrow();
    }

    @Transactional
    public Client create(ClientUpsertDto in) {
        var c = new Client();
        mapper.updateEntityFromDto(in, c);
        c.setTenant(TenantHolder.get());
        return repo.save(c);
    }

    @Transactional
    public Client update(Long id, ClientUpsertDto in) {
        var c = repo.findByTenantAndId(TenantHolder.get(), id).orElseThrow();
        mapper.updateEntityFromDto(in, c);
        return c;
    }

    @Transactional
    public void delete(Long id) {
        var client = repo.findByTenantAndId(TenantHolder.get(), id).orElseThrow();
        repo.delete(client);
    }
}