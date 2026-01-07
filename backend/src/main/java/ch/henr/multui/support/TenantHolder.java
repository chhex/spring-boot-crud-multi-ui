package ch.henr.multui.support;

import ch.henr.multui.entity.Tenant;


public final class TenantHolder {
  private static final ThreadLocal<Tenant> CUR = new ThreadLocal<>();
  public static void set(Tenant t){ CUR.set(t); }
  public static Tenant get(){ return CUR.get(); }
  public static void clear(){ CUR.remove(); }
  private TenantHolder(){}
}
