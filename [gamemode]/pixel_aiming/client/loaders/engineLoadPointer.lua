addEventHandler( "onClientResourceStart", resourceRoot, function () 
  txd = engineLoadTXD("assets/invisible/invisible.txd", 352)
  engineImportTXD(txd, 352 )
  dff = engineLoadDFF("assets/invisible/invisible.dff", 352)
  engineReplaceModel(dff, 352 )
end)
