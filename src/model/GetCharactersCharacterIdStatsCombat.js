/*
 * EVE Swagger Interface
 * An OpenAPI for EVE Online
 *
 * OpenAPI spec version: 1.7.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.15
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.EveSwaggerInterface) {
      root.EveSwaggerInterface = {};
    }
    root.EveSwaggerInterface.GetCharactersCharacterIdStatsCombat = factory(root.EveSwaggerInterface.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GetCharactersCharacterIdStatsCombat model module.
   * @module model/GetCharactersCharacterIdStatsCombat
   * @version 1.7.2
   */

  /**
   * Constructs a new <code>GetCharactersCharacterIdStatsCombat</code>.
   * combat object
   * @alias module:model/GetCharactersCharacterIdStatsCombat
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>GetCharactersCharacterIdStatsCombat</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetCharactersCharacterIdStatsCombat} obj Optional instance to populate.
   * @return {module:model/GetCharactersCharacterIdStatsCombat} The populated <code>GetCharactersCharacterIdStatsCombat</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('cap_drainedby_npc'))
        obj.capDrainedbyNpc = ApiClient.convertToType(data['cap_drainedby_npc'], 'Number');
      if (data.hasOwnProperty('cap_drainedby_pc'))
        obj.capDrainedbyPc = ApiClient.convertToType(data['cap_drainedby_pc'], 'Number');
      if (data.hasOwnProperty('cap_draining_pc'))
        obj.capDrainingPc = ApiClient.convertToType(data['cap_draining_pc'], 'Number');
      if (data.hasOwnProperty('criminal_flag_set'))
        obj.criminalFlagSet = ApiClient.convertToType(data['criminal_flag_set'], 'Number');
      if (data.hasOwnProperty('damage_from_np_cs_amount'))
        obj.damageFromNpCsAmount = ApiClient.convertToType(data['damage_from_np_cs_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_np_cs_num_shots'))
        obj.damageFromNpCsNumShots = ApiClient.convertToType(data['damage_from_np_cs_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_bomb_amount'))
        obj.damageFromPlayersBombAmount = ApiClient.convertToType(data['damage_from_players_bomb_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_bomb_num_shots'))
        obj.damageFromPlayersBombNumShots = ApiClient.convertToType(data['damage_from_players_bomb_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_combat_drone_amount'))
        obj.damageFromPlayersCombatDroneAmount = ApiClient.convertToType(data['damage_from_players_combat_drone_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_combat_drone_num_shots'))
        obj.damageFromPlayersCombatDroneNumShots = ApiClient.convertToType(data['damage_from_players_combat_drone_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_energy_amount'))
        obj.damageFromPlayersEnergyAmount = ApiClient.convertToType(data['damage_from_players_energy_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_energy_num_shots'))
        obj.damageFromPlayersEnergyNumShots = ApiClient.convertToType(data['damage_from_players_energy_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_fighter_bomber_amount'))
        obj.damageFromPlayersFighterBomberAmount = ApiClient.convertToType(data['damage_from_players_fighter_bomber_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_fighter_bomber_num_shots'))
        obj.damageFromPlayersFighterBomberNumShots = ApiClient.convertToType(data['damage_from_players_fighter_bomber_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_fighter_drone_amount'))
        obj.damageFromPlayersFighterDroneAmount = ApiClient.convertToType(data['damage_from_players_fighter_drone_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_fighter_drone_num_shots'))
        obj.damageFromPlayersFighterDroneNumShots = ApiClient.convertToType(data['damage_from_players_fighter_drone_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_hybrid_amount'))
        obj.damageFromPlayersHybridAmount = ApiClient.convertToType(data['damage_from_players_hybrid_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_hybrid_num_shots'))
        obj.damageFromPlayersHybridNumShots = ApiClient.convertToType(data['damage_from_players_hybrid_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_missile_amount'))
        obj.damageFromPlayersMissileAmount = ApiClient.convertToType(data['damage_from_players_missile_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_missile_num_shots'))
        obj.damageFromPlayersMissileNumShots = ApiClient.convertToType(data['damage_from_players_missile_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_projectile_amount'))
        obj.damageFromPlayersProjectileAmount = ApiClient.convertToType(data['damage_from_players_projectile_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_projectile_num_shots'))
        obj.damageFromPlayersProjectileNumShots = ApiClient.convertToType(data['damage_from_players_projectile_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_smart_bomb_amount'))
        obj.damageFromPlayersSmartBombAmount = ApiClient.convertToType(data['damage_from_players_smart_bomb_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_smart_bomb_num_shots'))
        obj.damageFromPlayersSmartBombNumShots = ApiClient.convertToType(data['damage_from_players_smart_bomb_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_players_super_amount'))
        obj.damageFromPlayersSuperAmount = ApiClient.convertToType(data['damage_from_players_super_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_players_super_num_shots'))
        obj.damageFromPlayersSuperNumShots = ApiClient.convertToType(data['damage_from_players_super_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_from_structures_total_amount'))
        obj.damageFromStructuresTotalAmount = ApiClient.convertToType(data['damage_from_structures_total_amount'], 'Number');
      if (data.hasOwnProperty('damage_from_structures_total_num_shots'))
        obj.damageFromStructuresTotalNumShots = ApiClient.convertToType(data['damage_from_structures_total_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_bomb_amount'))
        obj.damageToPlayersBombAmount = ApiClient.convertToType(data['damage_to_players_bomb_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_bomb_num_shots'))
        obj.damageToPlayersBombNumShots = ApiClient.convertToType(data['damage_to_players_bomb_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_combat_drone_amount'))
        obj.damageToPlayersCombatDroneAmount = ApiClient.convertToType(data['damage_to_players_combat_drone_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_combat_drone_num_shots'))
        obj.damageToPlayersCombatDroneNumShots = ApiClient.convertToType(data['damage_to_players_combat_drone_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_energy_amount'))
        obj.damageToPlayersEnergyAmount = ApiClient.convertToType(data['damage_to_players_energy_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_energy_num_shots'))
        obj.damageToPlayersEnergyNumShots = ApiClient.convertToType(data['damage_to_players_energy_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_fighter_bomber_amount'))
        obj.damageToPlayersFighterBomberAmount = ApiClient.convertToType(data['damage_to_players_fighter_bomber_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_fighter_bomber_num_shots'))
        obj.damageToPlayersFighterBomberNumShots = ApiClient.convertToType(data['damage_to_players_fighter_bomber_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_fighter_drone_amount'))
        obj.damageToPlayersFighterDroneAmount = ApiClient.convertToType(data['damage_to_players_fighter_drone_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_fighter_drone_num_shots'))
        obj.damageToPlayersFighterDroneNumShots = ApiClient.convertToType(data['damage_to_players_fighter_drone_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_hybrid_amount'))
        obj.damageToPlayersHybridAmount = ApiClient.convertToType(data['damage_to_players_hybrid_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_hybrid_num_shots'))
        obj.damageToPlayersHybridNumShots = ApiClient.convertToType(data['damage_to_players_hybrid_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_missile_amount'))
        obj.damageToPlayersMissileAmount = ApiClient.convertToType(data['damage_to_players_missile_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_missile_num_shots'))
        obj.damageToPlayersMissileNumShots = ApiClient.convertToType(data['damage_to_players_missile_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_projectile_amount'))
        obj.damageToPlayersProjectileAmount = ApiClient.convertToType(data['damage_to_players_projectile_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_projectile_num_shots'))
        obj.damageToPlayersProjectileNumShots = ApiClient.convertToType(data['damage_to_players_projectile_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_smart_bomb_amount'))
        obj.damageToPlayersSmartBombAmount = ApiClient.convertToType(data['damage_to_players_smart_bomb_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_smart_bomb_num_shots'))
        obj.damageToPlayersSmartBombNumShots = ApiClient.convertToType(data['damage_to_players_smart_bomb_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_players_super_amount'))
        obj.damageToPlayersSuperAmount = ApiClient.convertToType(data['damage_to_players_super_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_players_super_num_shots'))
        obj.damageToPlayersSuperNumShots = ApiClient.convertToType(data['damage_to_players_super_num_shots'], 'Number');
      if (data.hasOwnProperty('damage_to_structures_total_amount'))
        obj.damageToStructuresTotalAmount = ApiClient.convertToType(data['damage_to_structures_total_amount'], 'Number');
      if (data.hasOwnProperty('damage_to_structures_total_num_shots'))
        obj.damageToStructuresTotalNumShots = ApiClient.convertToType(data['damage_to_structures_total_num_shots'], 'Number');
      if (data.hasOwnProperty('deaths_high_sec'))
        obj.deathsHighSec = ApiClient.convertToType(data['deaths_high_sec'], 'Number');
      if (data.hasOwnProperty('deaths_low_sec'))
        obj.deathsLowSec = ApiClient.convertToType(data['deaths_low_sec'], 'Number');
      if (data.hasOwnProperty('deaths_null_sec'))
        obj.deathsNullSec = ApiClient.convertToType(data['deaths_null_sec'], 'Number');
      if (data.hasOwnProperty('deaths_pod_high_sec'))
        obj.deathsPodHighSec = ApiClient.convertToType(data['deaths_pod_high_sec'], 'Number');
      if (data.hasOwnProperty('deaths_pod_low_sec'))
        obj.deathsPodLowSec = ApiClient.convertToType(data['deaths_pod_low_sec'], 'Number');
      if (data.hasOwnProperty('deaths_pod_null_sec'))
        obj.deathsPodNullSec = ApiClient.convertToType(data['deaths_pod_null_sec'], 'Number');
      if (data.hasOwnProperty('deaths_pod_wormhole'))
        obj.deathsPodWormhole = ApiClient.convertToType(data['deaths_pod_wormhole'], 'Number');
      if (data.hasOwnProperty('deaths_wormhole'))
        obj.deathsWormhole = ApiClient.convertToType(data['deaths_wormhole'], 'Number');
      if (data.hasOwnProperty('drone_engage'))
        obj.droneEngage = ApiClient.convertToType(data['drone_engage'], 'Number');
      if (data.hasOwnProperty('dscans'))
        obj.dscans = ApiClient.convertToType(data['dscans'], 'Number');
      if (data.hasOwnProperty('duel_requested'))
        obj.duelRequested = ApiClient.convertToType(data['duel_requested'], 'Number');
      if (data.hasOwnProperty('engagement_register'))
        obj.engagementRegister = ApiClient.convertToType(data['engagement_register'], 'Number');
      if (data.hasOwnProperty('kills_assists'))
        obj.killsAssists = ApiClient.convertToType(data['kills_assists'], 'Number');
      if (data.hasOwnProperty('kills_high_sec'))
        obj.killsHighSec = ApiClient.convertToType(data['kills_high_sec'], 'Number');
      if (data.hasOwnProperty('kills_low_sec'))
        obj.killsLowSec = ApiClient.convertToType(data['kills_low_sec'], 'Number');
      if (data.hasOwnProperty('kills_null_sec'))
        obj.killsNullSec = ApiClient.convertToType(data['kills_null_sec'], 'Number');
      if (data.hasOwnProperty('kills_pod_high_sec'))
        obj.killsPodHighSec = ApiClient.convertToType(data['kills_pod_high_sec'], 'Number');
      if (data.hasOwnProperty('kills_pod_low_sec'))
        obj.killsPodLowSec = ApiClient.convertToType(data['kills_pod_low_sec'], 'Number');
      if (data.hasOwnProperty('kills_pod_null_sec'))
        obj.killsPodNullSec = ApiClient.convertToType(data['kills_pod_null_sec'], 'Number');
      if (data.hasOwnProperty('kills_pod_wormhole'))
        obj.killsPodWormhole = ApiClient.convertToType(data['kills_pod_wormhole'], 'Number');
      if (data.hasOwnProperty('kills_wormhole'))
        obj.killsWormhole = ApiClient.convertToType(data['kills_wormhole'], 'Number');
      if (data.hasOwnProperty('npc_flag_set'))
        obj.npcFlagSet = ApiClient.convertToType(data['npc_flag_set'], 'Number');
      if (data.hasOwnProperty('probe_scans'))
        obj.probeScans = ApiClient.convertToType(data['probe_scans'], 'Number');
      if (data.hasOwnProperty('pvp_flag_set'))
        obj.pvpFlagSet = ApiClient.convertToType(data['pvp_flag_set'], 'Number');
      if (data.hasOwnProperty('repair_armor_by_remote_amount'))
        obj.repairArmorByRemoteAmount = ApiClient.convertToType(data['repair_armor_by_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_armor_remote_amount'))
        obj.repairArmorRemoteAmount = ApiClient.convertToType(data['repair_armor_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_armor_self_amount'))
        obj.repairArmorSelfAmount = ApiClient.convertToType(data['repair_armor_self_amount'], 'Number');
      if (data.hasOwnProperty('repair_capacitor_by_remote_amount'))
        obj.repairCapacitorByRemoteAmount = ApiClient.convertToType(data['repair_capacitor_by_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_capacitor_remote_amount'))
        obj.repairCapacitorRemoteAmount = ApiClient.convertToType(data['repair_capacitor_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_capacitor_self_amount'))
        obj.repairCapacitorSelfAmount = ApiClient.convertToType(data['repair_capacitor_self_amount'], 'Number');
      if (data.hasOwnProperty('repair_hull_by_remote_amount'))
        obj.repairHullByRemoteAmount = ApiClient.convertToType(data['repair_hull_by_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_hull_remote_amount'))
        obj.repairHullRemoteAmount = ApiClient.convertToType(data['repair_hull_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_hull_self_amount'))
        obj.repairHullSelfAmount = ApiClient.convertToType(data['repair_hull_self_amount'], 'Number');
      if (data.hasOwnProperty('repair_shield_by_remote_amount'))
        obj.repairShieldByRemoteAmount = ApiClient.convertToType(data['repair_shield_by_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_shield_remote_amount'))
        obj.repairShieldRemoteAmount = ApiClient.convertToType(data['repair_shield_remote_amount'], 'Number');
      if (data.hasOwnProperty('repair_shield_self_amount'))
        obj.repairShieldSelfAmount = ApiClient.convertToType(data['repair_shield_self_amount'], 'Number');
      if (data.hasOwnProperty('self_destructs'))
        obj.selfDestructs = ApiClient.convertToType(data['self_destructs'], 'Number');
      if (data.hasOwnProperty('warp_scramble_pc'))
        obj.warpScramblePc = ApiClient.convertToType(data['warp_scramble_pc'], 'Number');
      if (data.hasOwnProperty('warp_scrambledby_npc'))
        obj.warpScrambledbyNpc = ApiClient.convertToType(data['warp_scrambledby_npc'], 'Number');
      if (data.hasOwnProperty('warp_scrambledby_pc'))
        obj.warpScrambledbyPc = ApiClient.convertToType(data['warp_scrambledby_pc'], 'Number');
      if (data.hasOwnProperty('weapon_flag_set'))
        obj.weaponFlagSet = ApiClient.convertToType(data['weapon_flag_set'], 'Number');
      if (data.hasOwnProperty('webifiedby_npc'))
        obj.webifiedbyNpc = ApiClient.convertToType(data['webifiedby_npc'], 'Number');
      if (data.hasOwnProperty('webifiedby_pc'))
        obj.webifiedbyPc = ApiClient.convertToType(data['webifiedby_pc'], 'Number');
      if (data.hasOwnProperty('webifying_pc'))
        obj.webifyingPc = ApiClient.convertToType(data['webifying_pc'], 'Number');
    }
    return obj;
  }

  /**
   * cap_drainedby_npc integer
   * @member {Number} capDrainedbyNpc
   */
  exports.prototype.capDrainedbyNpc = undefined;

  /**
   * cap_drainedby_pc integer
   * @member {Number} capDrainedbyPc
   */
  exports.prototype.capDrainedbyPc = undefined;

  /**
   * cap_draining_pc integer
   * @member {Number} capDrainingPc
   */
  exports.prototype.capDrainingPc = undefined;

  /**
   * criminal_flag_set integer
   * @member {Number} criminalFlagSet
   */
  exports.prototype.criminalFlagSet = undefined;

  /**
   * damage_from_np_cs_amount integer
   * @member {Number} damageFromNpCsAmount
   */
  exports.prototype.damageFromNpCsAmount = undefined;

  /**
   * damage_from_np_cs_num_shots integer
   * @member {Number} damageFromNpCsNumShots
   */
  exports.prototype.damageFromNpCsNumShots = undefined;

  /**
   * damage_from_players_bomb_amount integer
   * @member {Number} damageFromPlayersBombAmount
   */
  exports.prototype.damageFromPlayersBombAmount = undefined;

  /**
   * damage_from_players_bomb_num_shots integer
   * @member {Number} damageFromPlayersBombNumShots
   */
  exports.prototype.damageFromPlayersBombNumShots = undefined;

  /**
   * damage_from_players_combat_drone_amount integer
   * @member {Number} damageFromPlayersCombatDroneAmount
   */
  exports.prototype.damageFromPlayersCombatDroneAmount = undefined;

  /**
   * damage_from_players_combat_drone_num_shots integer
   * @member {Number} damageFromPlayersCombatDroneNumShots
   */
  exports.prototype.damageFromPlayersCombatDroneNumShots = undefined;

  /**
   * damage_from_players_energy_amount integer
   * @member {Number} damageFromPlayersEnergyAmount
   */
  exports.prototype.damageFromPlayersEnergyAmount = undefined;

  /**
   * damage_from_players_energy_num_shots integer
   * @member {Number} damageFromPlayersEnergyNumShots
   */
  exports.prototype.damageFromPlayersEnergyNumShots = undefined;

  /**
   * damage_from_players_fighter_bomber_amount integer
   * @member {Number} damageFromPlayersFighterBomberAmount
   */
  exports.prototype.damageFromPlayersFighterBomberAmount = undefined;

  /**
   * damage_from_players_fighter_bomber_num_shots integer
   * @member {Number} damageFromPlayersFighterBomberNumShots
   */
  exports.prototype.damageFromPlayersFighterBomberNumShots = undefined;

  /**
   * damage_from_players_fighter_drone_amount integer
   * @member {Number} damageFromPlayersFighterDroneAmount
   */
  exports.prototype.damageFromPlayersFighterDroneAmount = undefined;

  /**
   * damage_from_players_fighter_drone_num_shots integer
   * @member {Number} damageFromPlayersFighterDroneNumShots
   */
  exports.prototype.damageFromPlayersFighterDroneNumShots = undefined;

  /**
   * damage_from_players_hybrid_amount integer
   * @member {Number} damageFromPlayersHybridAmount
   */
  exports.prototype.damageFromPlayersHybridAmount = undefined;

  /**
   * damage_from_players_hybrid_num_shots integer
   * @member {Number} damageFromPlayersHybridNumShots
   */
  exports.prototype.damageFromPlayersHybridNumShots = undefined;

  /**
   * damage_from_players_missile_amount integer
   * @member {Number} damageFromPlayersMissileAmount
   */
  exports.prototype.damageFromPlayersMissileAmount = undefined;

  /**
   * damage_from_players_missile_num_shots integer
   * @member {Number} damageFromPlayersMissileNumShots
   */
  exports.prototype.damageFromPlayersMissileNumShots = undefined;

  /**
   * damage_from_players_projectile_amount integer
   * @member {Number} damageFromPlayersProjectileAmount
   */
  exports.prototype.damageFromPlayersProjectileAmount = undefined;

  /**
   * damage_from_players_projectile_num_shots integer
   * @member {Number} damageFromPlayersProjectileNumShots
   */
  exports.prototype.damageFromPlayersProjectileNumShots = undefined;

  /**
   * damage_from_players_smart_bomb_amount integer
   * @member {Number} damageFromPlayersSmartBombAmount
   */
  exports.prototype.damageFromPlayersSmartBombAmount = undefined;

  /**
   * damage_from_players_smart_bomb_num_shots integer
   * @member {Number} damageFromPlayersSmartBombNumShots
   */
  exports.prototype.damageFromPlayersSmartBombNumShots = undefined;

  /**
   * damage_from_players_super_amount integer
   * @member {Number} damageFromPlayersSuperAmount
   */
  exports.prototype.damageFromPlayersSuperAmount = undefined;

  /**
   * damage_from_players_super_num_shots integer
   * @member {Number} damageFromPlayersSuperNumShots
   */
  exports.prototype.damageFromPlayersSuperNumShots = undefined;

  /**
   * damage_from_structures_total_amount integer
   * @member {Number} damageFromStructuresTotalAmount
   */
  exports.prototype.damageFromStructuresTotalAmount = undefined;

  /**
   * damage_from_structures_total_num_shots integer
   * @member {Number} damageFromStructuresTotalNumShots
   */
  exports.prototype.damageFromStructuresTotalNumShots = undefined;

  /**
   * damage_to_players_bomb_amount integer
   * @member {Number} damageToPlayersBombAmount
   */
  exports.prototype.damageToPlayersBombAmount = undefined;

  /**
   * damage_to_players_bomb_num_shots integer
   * @member {Number} damageToPlayersBombNumShots
   */
  exports.prototype.damageToPlayersBombNumShots = undefined;

  /**
   * damage_to_players_combat_drone_amount integer
   * @member {Number} damageToPlayersCombatDroneAmount
   */
  exports.prototype.damageToPlayersCombatDroneAmount = undefined;

  /**
   * damage_to_players_combat_drone_num_shots integer
   * @member {Number} damageToPlayersCombatDroneNumShots
   */
  exports.prototype.damageToPlayersCombatDroneNumShots = undefined;

  /**
   * damage_to_players_energy_amount integer
   * @member {Number} damageToPlayersEnergyAmount
   */
  exports.prototype.damageToPlayersEnergyAmount = undefined;

  /**
   * damage_to_players_energy_num_shots integer
   * @member {Number} damageToPlayersEnergyNumShots
   */
  exports.prototype.damageToPlayersEnergyNumShots = undefined;

  /**
   * damage_to_players_fighter_bomber_amount integer
   * @member {Number} damageToPlayersFighterBomberAmount
   */
  exports.prototype.damageToPlayersFighterBomberAmount = undefined;

  /**
   * damage_to_players_fighter_bomber_num_shots integer
   * @member {Number} damageToPlayersFighterBomberNumShots
   */
  exports.prototype.damageToPlayersFighterBomberNumShots = undefined;

  /**
   * damage_to_players_fighter_drone_amount integer
   * @member {Number} damageToPlayersFighterDroneAmount
   */
  exports.prototype.damageToPlayersFighterDroneAmount = undefined;

  /**
   * damage_to_players_fighter_drone_num_shots integer
   * @member {Number} damageToPlayersFighterDroneNumShots
   */
  exports.prototype.damageToPlayersFighterDroneNumShots = undefined;

  /**
   * damage_to_players_hybrid_amount integer
   * @member {Number} damageToPlayersHybridAmount
   */
  exports.prototype.damageToPlayersHybridAmount = undefined;

  /**
   * damage_to_players_hybrid_num_shots integer
   * @member {Number} damageToPlayersHybridNumShots
   */
  exports.prototype.damageToPlayersHybridNumShots = undefined;

  /**
   * damage_to_players_missile_amount integer
   * @member {Number} damageToPlayersMissileAmount
   */
  exports.prototype.damageToPlayersMissileAmount = undefined;

  /**
   * damage_to_players_missile_num_shots integer
   * @member {Number} damageToPlayersMissileNumShots
   */
  exports.prototype.damageToPlayersMissileNumShots = undefined;

  /**
   * damage_to_players_projectile_amount integer
   * @member {Number} damageToPlayersProjectileAmount
   */
  exports.prototype.damageToPlayersProjectileAmount = undefined;

  /**
   * damage_to_players_projectile_num_shots integer
   * @member {Number} damageToPlayersProjectileNumShots
   */
  exports.prototype.damageToPlayersProjectileNumShots = undefined;

  /**
   * damage_to_players_smart_bomb_amount integer
   * @member {Number} damageToPlayersSmartBombAmount
   */
  exports.prototype.damageToPlayersSmartBombAmount = undefined;

  /**
   * damage_to_players_smart_bomb_num_shots integer
   * @member {Number} damageToPlayersSmartBombNumShots
   */
  exports.prototype.damageToPlayersSmartBombNumShots = undefined;

  /**
   * damage_to_players_super_amount integer
   * @member {Number} damageToPlayersSuperAmount
   */
  exports.prototype.damageToPlayersSuperAmount = undefined;

  /**
   * damage_to_players_super_num_shots integer
   * @member {Number} damageToPlayersSuperNumShots
   */
  exports.prototype.damageToPlayersSuperNumShots = undefined;

  /**
   * damage_to_structures_total_amount integer
   * @member {Number} damageToStructuresTotalAmount
   */
  exports.prototype.damageToStructuresTotalAmount = undefined;

  /**
   * damage_to_structures_total_num_shots integer
   * @member {Number} damageToStructuresTotalNumShots
   */
  exports.prototype.damageToStructuresTotalNumShots = undefined;

  /**
   * deaths_high_sec integer
   * @member {Number} deathsHighSec
   */
  exports.prototype.deathsHighSec = undefined;

  /**
   * deaths_low_sec integer
   * @member {Number} deathsLowSec
   */
  exports.prototype.deathsLowSec = undefined;

  /**
   * deaths_null_sec integer
   * @member {Number} deathsNullSec
   */
  exports.prototype.deathsNullSec = undefined;

  /**
   * deaths_pod_high_sec integer
   * @member {Number} deathsPodHighSec
   */
  exports.prototype.deathsPodHighSec = undefined;

  /**
   * deaths_pod_low_sec integer
   * @member {Number} deathsPodLowSec
   */
  exports.prototype.deathsPodLowSec = undefined;

  /**
   * deaths_pod_null_sec integer
   * @member {Number} deathsPodNullSec
   */
  exports.prototype.deathsPodNullSec = undefined;

  /**
   * deaths_pod_wormhole integer
   * @member {Number} deathsPodWormhole
   */
  exports.prototype.deathsPodWormhole = undefined;

  /**
   * deaths_wormhole integer
   * @member {Number} deathsWormhole
   */
  exports.prototype.deathsWormhole = undefined;

  /**
   * drone_engage integer
   * @member {Number} droneEngage
   */
  exports.prototype.droneEngage = undefined;

  /**
   * dscans integer
   * @member {Number} dscans
   */
  exports.prototype.dscans = undefined;

  /**
   * duel_requested integer
   * @member {Number} duelRequested
   */
  exports.prototype.duelRequested = undefined;

  /**
   * engagement_register integer
   * @member {Number} engagementRegister
   */
  exports.prototype.engagementRegister = undefined;

  /**
   * kills_assists integer
   * @member {Number} killsAssists
   */
  exports.prototype.killsAssists = undefined;

  /**
   * kills_high_sec integer
   * @member {Number} killsHighSec
   */
  exports.prototype.killsHighSec = undefined;

  /**
   * kills_low_sec integer
   * @member {Number} killsLowSec
   */
  exports.prototype.killsLowSec = undefined;

  /**
   * kills_null_sec integer
   * @member {Number} killsNullSec
   */
  exports.prototype.killsNullSec = undefined;

  /**
   * kills_pod_high_sec integer
   * @member {Number} killsPodHighSec
   */
  exports.prototype.killsPodHighSec = undefined;

  /**
   * kills_pod_low_sec integer
   * @member {Number} killsPodLowSec
   */
  exports.prototype.killsPodLowSec = undefined;

  /**
   * kills_pod_null_sec integer
   * @member {Number} killsPodNullSec
   */
  exports.prototype.killsPodNullSec = undefined;

  /**
   * kills_pod_wormhole integer
   * @member {Number} killsPodWormhole
   */
  exports.prototype.killsPodWormhole = undefined;

  /**
   * kills_wormhole integer
   * @member {Number} killsWormhole
   */
  exports.prototype.killsWormhole = undefined;

  /**
   * npc_flag_set integer
   * @member {Number} npcFlagSet
   */
  exports.prototype.npcFlagSet = undefined;

  /**
   * probe_scans integer
   * @member {Number} probeScans
   */
  exports.prototype.probeScans = undefined;

  /**
   * pvp_flag_set integer
   * @member {Number} pvpFlagSet
   */
  exports.prototype.pvpFlagSet = undefined;

  /**
   * repair_armor_by_remote_amount integer
   * @member {Number} repairArmorByRemoteAmount
   */
  exports.prototype.repairArmorByRemoteAmount = undefined;

  /**
   * repair_armor_remote_amount integer
   * @member {Number} repairArmorRemoteAmount
   */
  exports.prototype.repairArmorRemoteAmount = undefined;

  /**
   * repair_armor_self_amount integer
   * @member {Number} repairArmorSelfAmount
   */
  exports.prototype.repairArmorSelfAmount = undefined;

  /**
   * repair_capacitor_by_remote_amount integer
   * @member {Number} repairCapacitorByRemoteAmount
   */
  exports.prototype.repairCapacitorByRemoteAmount = undefined;

  /**
   * repair_capacitor_remote_amount integer
   * @member {Number} repairCapacitorRemoteAmount
   */
  exports.prototype.repairCapacitorRemoteAmount = undefined;

  /**
   * repair_capacitor_self_amount integer
   * @member {Number} repairCapacitorSelfAmount
   */
  exports.prototype.repairCapacitorSelfAmount = undefined;

  /**
   * repair_hull_by_remote_amount integer
   * @member {Number} repairHullByRemoteAmount
   */
  exports.prototype.repairHullByRemoteAmount = undefined;

  /**
   * repair_hull_remote_amount integer
   * @member {Number} repairHullRemoteAmount
   */
  exports.prototype.repairHullRemoteAmount = undefined;

  /**
   * repair_hull_self_amount integer
   * @member {Number} repairHullSelfAmount
   */
  exports.prototype.repairHullSelfAmount = undefined;

  /**
   * repair_shield_by_remote_amount integer
   * @member {Number} repairShieldByRemoteAmount
   */
  exports.prototype.repairShieldByRemoteAmount = undefined;

  /**
   * repair_shield_remote_amount integer
   * @member {Number} repairShieldRemoteAmount
   */
  exports.prototype.repairShieldRemoteAmount = undefined;

  /**
   * repair_shield_self_amount integer
   * @member {Number} repairShieldSelfAmount
   */
  exports.prototype.repairShieldSelfAmount = undefined;

  /**
   * self_destructs integer
   * @member {Number} selfDestructs
   */
  exports.prototype.selfDestructs = undefined;

  /**
   * warp_scramble_pc integer
   * @member {Number} warpScramblePc
   */
  exports.prototype.warpScramblePc = undefined;

  /**
   * warp_scrambledby_npc integer
   * @member {Number} warpScrambledbyNpc
   */
  exports.prototype.warpScrambledbyNpc = undefined;

  /**
   * warp_scrambledby_pc integer
   * @member {Number} warpScrambledbyPc
   */
  exports.prototype.warpScrambledbyPc = undefined;

  /**
   * weapon_flag_set integer
   * @member {Number} weaponFlagSet
   */
  exports.prototype.weaponFlagSet = undefined;

  /**
   * webifiedby_npc integer
   * @member {Number} webifiedbyNpc
   */
  exports.prototype.webifiedbyNpc = undefined;

  /**
   * webifiedby_pc integer
   * @member {Number} webifiedbyPc
   */
  exports.prototype.webifiedbyPc = undefined;

  /**
   * webifying_pc integer
   * @member {Number} webifyingPc
   */
  exports.prototype.webifyingPc = undefined;

  return exports;

}));
