import { BartCategory, DMCategory, EmissionActivity } from "../interfaces";
import { Bart, BartNode } from "../models";

export const BART_CONSTANTS: BartNode[] = [
    {
        id: 1, name: 'BART001_Fuel_Purchase', isExpand: false, children: [
            { id: 11, name: 'BART001.a_Fuel_Purchase', isExpand: false, children: [] },
            { id: 12, name: 'BART001.b_Fuel_Purchase', isExpand: false, children: [] },
            { id: 13, name: 'BART001.c_Fuel_Purchase', isExpand: false, children: [] }
        ]
    },
    {
        id: 2, name: 'BART002_Fuel_Consumption', isExpand: false, children: [
            {
                id: 21, name: 'BART002.a_Fuel_Consumption', isExpand: false, children: [
                    {
                        id: 211, name: 'BART002.a.Natural Gas_Consumption', isExpand: false, children: [
                            { id: 2111, name: 'BART002.a.1.a_Natural Gas_Consumption', isExpand: false, children: [] },
                        ]
                    },
                    { id: 212, name: 'BART002.a.2_Biogas_Consumption', isExpand: false, children: [] },
                    { id: 213, name: 'BART002.a.3_Liquid Biomass_Consumption', isExpand: false, children: [] },
                    { id: 214, name: 'BART002.a.4_Solid Biomass_Consumption', isExpand: false, children: [] }
                ]
            },
            { id: 22, name: 'BART002.b_Fuel_Consumption', isExpand: false, children: [] },
            { id: 23, name: 'BART002.c_Fuel_Consumption', isExpand: false, children: [] }
        ]
    },
    {
        id: 3, name: 'BART003_Fuel_Inventory', isExpand: false, children: [
            { id: 31, name: 'BART003.a_Fuel_Inventory', isExpand: false, children: [] },
            { id: 32, name: 'BART003.a.1_Liquid Biomass_Inventory', isExpand: false, children: [] },
        ]
    }
]

export const BART_DATA_CONSTANTS: Bart[] = [
    { id: 1, bartName: 'Purchase of fuels for end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 2, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 3, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 4, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Primary', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 1 },
    { id: 5, bartName: 'Consumption of fuels', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 6, bartName: 'Consumption of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 7, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 8, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 9, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 10, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 1 },
    { id: 11, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 12, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 13, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 1 },
    { id: 14, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 15, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 16, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 17, bartName: 'Purchase of fuels for end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 18, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 19, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 20, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 21, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 1 },
    { id: 22, bartName: 'Purchase of fuels for end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 23, bartName: 'Purchase of fuels for on-road vehicles', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 24, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 25, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 26, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 27, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 1 },
    { id: 28, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 29, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 30, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 31, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 32, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 33, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 34, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 35, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 36, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 37, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 38, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 39, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 40, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 41, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 42, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 43, bartName: 'Purchase of fuels for non-vehicle', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 44, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 45, bartName: 'Purchase of fuels for end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 46, bartName: 'Purchase of fuels for end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 47, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 48, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 49, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 50, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 11 },
    { id: 51, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 11 },
    { id: 52, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 53, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Mobile Combbustion: On-Road Vehicle', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 54, bartName: 'Purchase of fuels for end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 55, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Derived', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 56, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Derived', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Natural Gas', categoryId: 1 },
    { id: 57, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 58, bartName: 'Consumption of natural gas of non-vehicle end use', bartType: 'Primary', categoryGHG: 'Scope 1: Stationary Combusion', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 59, bartName: 'Purchase of fuels for non-vehicle end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
    { id: 60, bartName: 'Purchase of fuels for end use', bartType: 'Primary', categoryGHG: '', categoryFunctional: 'Energy and Utilities: Fuel Management', carbonSource: 'Fuel', categoryId: 1 },
];

export const BART_CATEGORY_CONSTANTS: BartCategory[] = [
    { id: 1, name: 'BART001_Fuel_Purchase' },
    { id: 2, name: 'BART002_Fuel_Consumption' },
    { id: 3, name: 'BART003_Fuel_Inventory' },
];
export const DM_CATEGORY_CONSTANTS: DMCategory[] = [
    { id: 1, name: 'Direct' },
    { id: 2, name: 'DM' },
    { id: 3, name: 'DM' },
];

export const EMISSION_ACTIVITY_CONSTANTS: EmissionActivity[] = [
    { id: 1, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 2, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 3, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Distrance Quantity' },
    { id: 4, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 5, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Distrance Quantity' },
    { id: 6, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 7, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Electricity Quantity' },
    { id: 8, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Distrance Quantity' },
    { id: 9, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Electricity Quantity' },
    { id: 10, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 11, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 12, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Electricity Quantity' },
    { id: 13, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 14, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Distrance Quantity' },
    { id: 15, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 16, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Electricity Quantity' },
    { id: 17, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Distrance Quantity' },
    { id: 18, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Electricity Quantity' },
    { id: 19, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 20, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Electricity Quantity' },
    { id: 21, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
    { id: 22, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Distrance Quantity' },
    { id: 23, eatId: 'EPA-2021_EAT001_Fuel_Combustion', reportedQuantity: 'Fual Quantity' },
]