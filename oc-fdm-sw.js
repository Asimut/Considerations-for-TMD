importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'); 

var CACHE_VERSION = 1;
var CURRENT_CACHES = {
  prefetch: 'prefetch-cache-Considerations-for-TMD-v' + CACHE_VERSION
};

//Page Link
var pageLink = 'https://asimut.github.io/Considerations-for-TMD/';

workbox.setConfig({ debug: true });

self.addEventListener('install', function(event) {
  let ok,
    libjs = ['player-0.0.11.min', 'lzwcompress'],
    libcss = ['icomoon'],
    libfonts = ['icomoon', 'Lato-Black', 'Lato-Bold', 'Lato-Italic', 'Lato-Light', 'Lato-Regular'],
    mondrianjs = ['2d2b02a0', '3a27456b', '42b5616c', '331b35c0', 'daef1d75', 'dbcf15f7', 'dd43309a', 'entry', 'fa4a2a91'],
    risejs = ['20be7de8', '97a0358e', 'bbe78f59', 'e6b609cf', 'eb9bd09f'],
    risecss = ['2e48bf4d', '11732e6a'],
    wbjs = ['ae9f88e9', 'b92601c5', 'd4168b22', 'd445416d', 'entry', 'fadc459f'],
    wbcss = ['467c7226'],
    assets =[
      '3qAWksvTzGJKyNy-_example-header-image.jpg',
      'F8mFeLtljYAm86IG_4_cities.jpg',
      'ui4AGzPiYQklEFr-_quote_background.jpg',
      'zLwyG3QzdHv7oEpF_Fcz5f6WBS0FktGGv.jpg',
      '0e5Gfguk89UaPqI9_GpzbeCJLaV67eZ1P.svg',
      '5Vr2wOHc1h0q6wOf_ZV9sVhdLLPr5_C8F.svg',
      '6iX_Gx7NYe_qMqGp_1u5jkIIq4niuBhVo.svg',
      'aH_RFUkzU6UDEuoS_p5OCBEEwEmLb_bEs.svg',
      'cElI39EnvYagsQ-O_nNF_8JAH3JQIy4C3.svg',
      'jLJPwhbeELEvrMHK_ZPmBKRlu0OrtPMw2.svg',
      'q6avkK-B7wcPj2Ip_pUKlA_ZN5HnDD-9s.svg',
      'QqSUKpd2d_DvxFBu_sHmnZuS5hTyBh71E.svg',
      'wZIQrhJ6dPeuwgj4_sDS_9D364hA2SlJ-.svg',
      'XSIRCGBpyeCpAM-s_OrQX187Z-zJRRNYT.svg',
      '1ntEKNVbT3nBXzOm_IUnOWLA-txaNMhy8.png',
      '1q8RvqNY208xWWfG_zLzOnSkBsZjZ8HyX.png',
      '1XhTkktiMXgdkkqm_NJXZU0JEvOGtgqfj.png',
      '2_hCkR6kqHTHG-y__transcoded-6F-kinz-Um3SBb7u-Gloria_Baseline-00001.png',
      '4ggRLjHSgAFgT72V__Ct1dZ08pNVbKhju.png',
      '5w-16h_7q3C7N36S_OGF2nWLneKmbGIDe.png',
      '8SnctGHcK0BImKWj_hTwYPO6zFjnoZ-Ly.png',
      '9nn903WvDC15MFsn_kD5ZdOpiH6zgM8tz.png',
      'Acd4IQJERh3ci2k6_uFTveUW5EV5h6MiN.png',
      'axhsUElOfKD2n6Fh_KtlnZvTY_6bsLgiq.png',
      'bBB5A5Mp3UYFUy5Q_Dt6P6dGRXPzDT7Q8.png',
      'bqUURTIRbN4lbEra_jQYr_ugoreE5k2wG.png',
      'c5_1HFIGCJYzn1Ao_zdP5SLGTJyDaShKl.png',
      'cEmAjuEZgSIhLKRg_uu6Gevc-pAiDXBAJ.png',
      'Cfb0TwkNsVeO_J5f_zZqQil0yAb5ASX0e.png',
      'CO84ujD5iz0fWRWi_transcoded-eZ9E531W2YCH-5Jd-upper-limbs-00001.png',
      'cSJ62yP9giXsyRKA_transcoded-cuFpRjmcAvLPRgBF-Martin_Baseline-00001.png',
      'cUhDgzVuRWyyi4yw_mR9SNknBr365Iwcq.png',
      'CwUABxaVXBO_KLbu_PxoYZ3c1RDgki6-o.png',
      'dJs7stPDOc4TTUqB_Uaqf9FX38KLvSlnG.png',
      'dNSROC3PlVuyjYlf_XTu-l932Xr0j9VEN.png',
      'EC3EcFu74YKpunoN_Q_E9xlPksi9HxuVl.png',
      'ekKTOSzXXzq1GjUp_kfisWqW7vgAz69uV.png',
      'eNoY1Pg8Tngb2pIf_IaCcsmiMK7vBWyFv.png',
      'eysegv66hszl1kRY_transcoded-6iZM7VOHmGoVJ7qg-lips-00001.png',
      'f17wC_TdDJcPGy2F_sfVSSehnBwTgA10F.png',
      'FCMZN-Wz3phW2Vhz_LtxkH4s7Nriha1gg.png',
      'FFXzTEFci-eW-qjJ_bkq0fzjIGVDvEDeu.png',
      'fg23anc_jxSUglPN_k6XT224PHdMik2KB.png',
      'Fvw4l4t8he1OosA5_Kz-XrBlTBlieq7eQ.png',
      'gQjHirzog5TWKcXh_1dSuZqKa_N5blGA8.png',
      'gzBByphEN7NJEuxq_QDnxVHL3dUPxSwql.png',
      'h-hrguEF2zv8GR_c_yjZQLNQnL37VJ8Ca.png',
      'HRuOhBRM4Ye7gtza_hqZ8CPfolZhlRpSn.png',
      'hVXffHwyz1PSJP_G_4ogyPvBNv8HGJJ_E.png',
      'iDOPJlMIi29un0XJ_00iaS05tFptaeCbk.png',
      'IlfDRpsYhWbQCe_w_AjZG11vLMsIrIPlZ.png',
      'iuVFfNpfAJJHXkcf_-RQXJlEbzdUcsKCR.png',
      'JJEOJs5i7RiByvuw_transcoded-p3ZW65hnn88TuGUm-Jane_48Weeks-00001.png',
      'k3x_kfzMP-Vq5AU-_6E2wLd_5pvik-AfL.png',
      'K30Uni3gBiWwQADD_transcoded-QDqKCPlPruDgXj5--Gloria_2Weeks-00001.png',
      'kavSmYK_AZMIyVqO_kPzGbxk-HtcTpoDy.png',
      'kSqdejD7HGb5sLAH_aM0TyYbchf6lQBnk.png',
      'lhOvHk8y1BLCyblE_transcoded-EIG8-_2SuQtTgoae-Sue_Baseline-00001.png',
      'lUND4Nauw8_tvLBH_uBpWcBI8uiN4K19B.png',
      'M6BL6LTmzrwJvdli_P1c5WYGq3jg-mCNZ.png',
      'mhdG7h3ZlFD84yzi_N0iivWmaTasjjPze.png',
      'mM3ig5M4b7nYZPj0_transcoded-kd_IwTb56uWFyUbl-Ed_Baseline-00001.png',
      'N6EEzHMa3mVZRqxB_transcoded-cyqlI9DTLppcN8Vk-torso-00001.png',
      'nflTvge1kgZAKzAC_AUzSH8jT4xFyfcYF.png',
      'ni_nDGaqVf8XTZok_phER7YCmgie78q9S.png',
      'OapaKvlDT74gknO6_zV3pEi8vZRgOY4H5.png',
      'oes2xU3pHzMukEbn_ODWqnRaeIv_yExEz.png',
      'ofQXi-aWE1ZsHYvV_transcoded-LvBEHhN3GT1Cnf8U-Gloria_6Weeks-00001.png',
      'oiJs3vlf0bu1MP6Z_-PiYcMSEDDEmCY6V.png',
      'okUSwDCN9jCVpYlC_small_1579124541.png',
      'oTx5ucLZi5gq802T_Z-thXYtbeknZuWSA.png',
      'otZ8EO4RUvlEWHOL_Q0fKDZtYxc315r7W.png',
      'OxTAQrtUOhXrEDEK_yFX-Hsof8NCenUB_.png',
      'pFNZQTfrzotkL8jX_bmbpctx2MWE776V8.png',
      'pv72Vp0xk6n5TmsX_transcoded--p-K0T8ihC0O0NHv-Ed_8Weeks-00001.png',
      'q2lVsca_tSGSUrqi_Wl5unxrAInzhE6Sf.png',
      'QaiyilQvI-no6HoU_sQeVi5FzNYgZ4FSK.png',
      'QV7f5GJA_W68ztep_small.png',
      'qzT3kto8nCYXOvHl_cWRCBafSzfiU-LwL.png',
      'RHrCl3d64Hx2g5-J_-qboOGLLZM2X_cBe.png',
      'RK-TLuyFZiZ_qcfE_uh4dqE7zsUI2r1wB.png',
      'SBLi71WHEPdsx5Zk_aLQ5C_jTMPwAsjUr.png',
      'Se7Iyp5fVDcFibjX_7qJKzI6Ux2ObDydb.png',
      'SVjjJyYhzdLaN6w8_obx9GZ_UdIh6j26S.png',
      'SxDG7MuFVEeJ_PXJ_bOFmv1bLIkarPMT6.png',
      'T0nX5ax-PBgp4Z2h_RWh4D_s7JT8qvz7K.png',
      'tuWpZov8Niq9kfcF_gAXajpLNmC8W_MsA.png',
      'txnlcuHj4R7qn31S_z-WFW_xawIIJU5x_.png',
      'u1cZ5YpBEbXlSMJ0_qtiZg7kLQBIOL401.png',
      'uBGVJZccGbhNA0Du_qSGggfnXK_LcPqTh.png',
      'UhVZGVYt6c7odpNu_DRiZvNn_c8xjdmS9.png',
      'Va_1I5rUDkfGlrMq_transcoded-rYO1lHqrO4rTMrlo-Martin_6Weeks-00001.png',
      'vJubRcNjTUUVyIAr_transcoded-Ej_YvFp67do0WgIJ-Sue_6Weeks-00001.png',
      'vN9uI56xo4NKKfm2_uhqNDLlCrh-_5g4W.png',
      'VOYXr2p4QJ43pKMx_xPHzLlAt7_01YoFJ.png',
      'W7v4kyoQkpJ2R-Rp_KEzpUfBEn0Az1Ge-.png',
      'w9YdwJbdJlf5uEWX_YwKiqoMhSyVfTLbA.png',
      'wf3zdiNj_YFCiy1M_1hYeCZtXoIfKUvED.png',
      'WQD_7EZsqRLoRoSd_2rmXOwzQhyhxpzZz.png',
      'Xed3sfAlumvCFB_n_NF1JbcP3LeoYuD55.png',
      'xhwSAW54Pc8rcuno_ezf5kjEL6CllSQp1.png',
      'xoVBUm_wo7mvPriw_GL7uzyP2ZbvLaUiq.png',
      'xQq0Qba2zP7EYdII_iW-FTcuutRmBZ8k0.png',
      'XVs9KWCvsh5GaOP5_transcoded-LalaPRKzNnds7fOX-lower-limbs-00001.png',
      'y0fWwPtiUF2-0nLu_transcoded-rJfHogn6SIOhVT3v-Jane_Baseline-00001.png',
      'y3LerPyIQqJp-e_4_zZq-bPMAXR15ya9M.png',
      'z29J_VZVSeBKGyVC_transcoded-WrsXiZUS_HBNp3RL-Sue_48Weeks-00001.png',
      'zmJYh3wi-o-5Gz5O_transcoded-t9PVyavmR7KoJT-W-Jane_6Weeks-00001.png',
      'ZX9YMATtx1Ou2rsW__BsaZtftMR_j3ky5.png',
      'zYEeAAUyg_vApiU9_ap3_xMk3EmWEBRCK.png',
      '0bAdcoJGjS81gRYn_2J8BYgvPMpp6J96a-INGREZZA-Full-Prescribing-Information_PI_Approved.pdf',
      'wKhxNS3rUjBSAuH3_Z0TzQjs3QKLI4aKB-INGREZZA-Full-Prescribing-Information_PI_Approved.pdf'
    ],
    assetsvideo =[
      'pOOlBVD_BJEDUjgh_transcoded-Ej_YvFp67do0WgIJ-Sue_6Weeks.mp4',
      'pVzo-rBr2IEO4Ipg_transcoded-QDqKCPlPruDgXj5--Gloria_2Weeks.mp4',
      'rrp9Z8pxXP7wy6_5_transcoded-LvBEHhN3GT1Cnf8U-Gloria_6Weeks.mp4',
      'ZN3L58bloXxFUDsD_transcoded-rJfHogn6SIOhVT3v-Jane_Baseline.mp4',
      'cezvo-EkUl-gYg5i_transcoded-LalaPRKzNnds7fOX-lower-limbs.mp4',
      'mNNuharYfZfw7sKX_transcoded-eZ9E531W2YCH-5Jd-upper-limbs.mp4',
      'sB7NrpFKk6j_3LIG_transcoded-6iZM7VOHmGoVJ7qg-lips.mp4',
      'snE1IT75KAQsJUQV_transcoded-cyqlI9DTLppcN8Vk-torso.mp4',
      'cnVNhNYe3ldKDYAL_transcoded-cuFpRjmcAvLPRgBF-Martin_Baseline.mp4',
      'k7MCgQnYm1CVJMS3_transcoded-rYO1lHqrO4rTMrlo-Martin_6Weeks.mp4',
      '54aIu-zjKMhMk5aP_transcoded-EIG8-_2SuQtTgoae-Sue_Baseline.mp4',
      'AUwlPRXxLSCtZ0n7_transcoded-WrsXiZUS_HBNp3RL-Sue_48Weeks.mp4',
      'CDHoTyPtXWHWL2XC_transcoded-6F-kinz-Um3SBb7u-Gloria_Baseline.mp4',
      'e4gtHrC6YHwwzrdg_transcoded-p3ZW65hnn88TuGUm-Jane_48Weeks.mp4',
      'h1aocR7SFvlqj_Rg_transcoded--p-K0T8ihC0O0NHv-Ed_8Weeks.mp4',
      'j2pvKFpN43MFnV7c_transcoded-kd_IwTb56uWFyUbl-Ed_Baseline.mp4',
      'k6Bhr1ZHYXm1C0b__transcoded-t9PVyavmR7KoJT-W-Jane_6Weeks.mp4'
    ];
  var urlsToPrefetch = [
      pageLink,
      pageLink+'index.html',
      ...libjs.map(i => pageLink+'lib/' + i + '.js'),
      ...libcss.map(i => pageLink+'lib/' + i + '.css'),
      ...libfonts.map(i => pageLink+'lib/fonts/' + i + '.woff'),
      ...mondrianjs.map(i => pageLink+'lib/mondrian/' + i + '.js'),
      ...risejs.map(i => pageLink+'lib/rise/' + i + '.js'),
      ...risecss.map(i => pageLink+'lib/rise/' + i + '.css'),
      ...wbjs.map(i => pageLink+'lib/wb/' + i + '.js'),
      ...wbcss.map(i => pageLink+'lib/wb/' + i + '.css'),
      pageLink+'lib/fonts/icomoon.ttf',
      pageLink+'assets/custom/jquery-3.6.0.min.js',
      pageLink+'assets/custom/script.js',
      pageLink+'assets/custom/style.css',
      pageLink+'assets/custom/arrow_down.png',
      pageLink+'assets/custom/chat.svg',
      pageLink+'assets/custom/check.svg',
      pageLink+'assets/custom/cover_logo.png',
      pageLink+'assets/custom/down-arrow.svg',
      pageLink+'assets/custom/ingrezza-valbenazine-logo-n.svg',
      pageLink+'assets/custom/logo-modal.png',
      pageLink+'assets/custom/open-book.svg',
      ...assets.map(i => pageLink+'assets/' + i),
      ...assetsvideo.map(i => pageLink+'assets/' + i + '?v=1'),
      pageLink+'oc-fdm-sw.js',
      pageLink+'manifest.json',
      pageLink+'152.png',
      pageLink+'144.png',
      pageLink+'64.png',
      pageLink+'32.png',
      pageLink+'android-launchericon-512-512.png'
  ];

  // All of these logging statements should be visible via the "Inspect" interface
  // for the relevant SW accessed via chrome://serviceworker-internals
  console.log('Handling install event. Resources to prefetch:', urlsToPrefetch);

  // self.skipWaiting();

  event.waitUntil(
    caches.open(CURRENT_CACHES.prefetch).then(async (cache) => {
      return cache.addAll(urlsToPrefetch);      
    }).then(() => {
      console.log('All files were successfully cached.');

      caches.open(CURRENT_CACHES.prefetch).then(cache => {
        cache.keys()
        .then(requests => console.log(requests))
      })

      self.skipWaiting();
    })
  );

});

self.addEventListener('activate', function(event) {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic will handle the case where
  // there are multiple versioned caches.
  var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
    return CURRENT_CACHES[key];
  });

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (expectedCacheNames.indexOf(cacheName) === -1) {
            // If this cache name isn't present in the array of "expected" cache names, then delete it.
            console.log('Deleting out of date cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
        );
    })
    );    
});

self.addEventListener('fetch', function(event) {
  
  headersLog = [];
  for (var pair of event.request.headers.entries()) {
    console.log(pair[0]+ ': '+ pair[1]);
    headersLog.push(pair[0]+ ': '+ pair[1])
 }
 console.log('Handling fetch event for', event.request.url, JSON.stringify(headersLog));

  if (event.request.headers.get('range')) {
    console.log('Range request for', event.request.url);
    var rangeHeader=event.request.headers.get('range');
    var rangeMatch =rangeHeader.match(/^bytes\=(\d+)\-(\d+)?/)
    var pos =Number(rangeMatch[1]);
    var pos2=rangeMatch[2];
    if (pos2) { pos2=Number(pos2); }
    
    console.log('Range request for '+ event.request.url,'Range: '+rangeHeader, "Parsed as: "+pos+"-"+pos2);
    event.respondWith(
      caches.open(CURRENT_CACHES.prefetch)
      .then(function(cache) {
        return cache.match(event.request.url);
      }).then(function(res) {
        if (!res) {
          console.log("Not found in cache - doing fetch")
          return fetch(event.request)
          .then(res => {
            console.log("Fetch done - returning response ",res)
            return res.arrayBuffer();
          });
        }
        console.log("FOUND in cache - doing fetch")
        return res.arrayBuffer();
      }).then(function(ab) {
        console.log("Response procssing")
        let responseHeaders=  {
          status: 206,
          statusText: 'Partial Content',
          headers: [
            ['Content-Type', 'video/mp4'],
            ['Content-Range', 'bytes ' + pos + '-' + 
            (pos2||(ab.byteLength - 1)) + '/' + ab.byteLength]]
        };
        
        console.log("Response: ",JSON.stringify(responseHeaders))
        var abSliced={};
        if (pos2>0){
          abSliced=ab.slice(pos,pos2+1);
        }else{
          abSliced=ab.slice(pos);
        }
        
        console.log("Response length: ",abSliced.byteLength)
        return new Response(
          abSliced,responseHeaders
        );
      }));
  } else {
    console.log('Non-range request for', event.request.url);
    event.respondWith(
    // caches.match() will look for a cache entry in all of the caches available to the service worker.
    // It's an alternative to first opening a specific named cache and then matching on that.
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found response in cache:', response);
        return response;
      }
      console.log('No response found in cache. About to fetch from network...');
      // event.request will always have the proper mode set ('cors, 'no-cors', etc.) so we don't
      // have to hardcode 'no-cors' like we do when fetch()ing in the install handler.
      return fetch(event.request).then(function(response) {
        console.log('Response from network is:', response);

        return response;
      }).catch(function(error) {
        // This catch() will handle exceptions thrown from the fetch() operation.
        // Note that a HTTP error response (e.g. 404) will NOT trigger an exception.
        // It will return a normal response object that has the appropriate error code set.
        console.error('Fetching failed:', error);

        throw error;
      });
    })
    );
  }
});
