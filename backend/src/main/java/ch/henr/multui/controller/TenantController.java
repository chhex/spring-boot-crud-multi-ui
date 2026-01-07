package ch.henr.multui.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ch.henr.multui.db.ClientsRepository;
import ch.henr.multui.entity.Tenant;
import ch.henr.multui.support.TenantHolder;

@RestController
@RequestMapping(value="/api/tenantInfo", produces="application/json")
public class TenantController {
  record TenantInfo(String tenantDisplay, long clientCount) {}

  private final ClientsRepository clients;

  public TenantController(ClientsRepository clients){ this.clients = clients; }

  @GetMapping
  public TenantInfo info() {
    Tenant t = TenantHolder.get();
    long count = clients.countByTenant(t);
    return new TenantInfo(t.getToken(), count);
  }
}