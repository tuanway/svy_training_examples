customProperties:"formComponent:false",
dataSource:"db:/example_data/orders",
extendsID:"9907A021-46A9-4B2E-9060-25D6ED5694DC",
items:[
{
anchors:11,
dataProviderID:"orderdate",
format:"MM/dd/yyyy",
location:"210,20",
name:"orderdate",
size:"90,30",
transparent:true,
typeid:7,
uuid:"06BDEDEB-3F7E-4A0B-8343-C4969821D8FE"
},
{
extendsID:"DE1FD21E-3D8B-4B43-BDEE-6AB67270DFCF",
height:52,
typeid:19,
uuid:"155D79B2-B7EA-479A-A5BD-C02D8A1C223B"
},
{
anchors:11,
labelFor:"companyname",
location:"0,0",
name:"companyname_label",
size:"210,20",
text:"Company",
transparent:true,
typeid:7,
uuid:"CFD950CA-E00C-4FC2-A149-D8398A3A2E01"
},
{
anchors:11,
dataProviderID:"orders_to_customers.companyname",
location:"0,20",
name:"companyname",
size:"210,30",
transparent:true,
typeid:7,
uuid:"E244DD14-AC68-4AFF-A836-E68248F060F9"
},
{
anchors:11,
labelFor:"orderdate",
location:"210,0",
name:"orderdate_label",
size:"90,20",
text:"Ordered",
transparent:true,
typeid:7,
uuid:"F3EF824A-2111-4AE1-B8C4-6CC86EB4DFA6"
}
],
name:"ordersGrid",
size:"300,0",
typeid:3,
uuid:"748B31E4-5EFD-4C75-953D-92292865CEEF",
view:3