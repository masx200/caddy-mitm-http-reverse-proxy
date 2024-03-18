const banner = `
{
	debug
	local_certs
	    
	 servers :443 {
protocols h1 h2 h2c h3
        

    }
        
     servers :8443 {

      protocols h1 h2 h2c h3

    }
}

`;
const upstream = [
  "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
];
const caddyFile = "./CaddyFile.txt";
const trailer = `

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx , https://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:8443 {
encode gzip
	tls internal
	
	reverse_proxy * http://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:8989 {
		
	}


}

`;
const hostsFile = "./hosts.txt";
const domains = Array.from(
  new Set([
    "www.v2ex.com",
    "translate.google.com.hk",
    "translate.google.cn",
    "d.apkpure.com",
    "apkpure.com",
    "hub.docker.com",
    "rr2---sn-npoldne7.googlevideo.com",
    "rr5---sn-npoe7ne6.googlevideo.com",
    "rr3---sn-5hnednsz.googlevideo.com",
    "rr5---sn-25glenlr.googlevideo.com",
    "rr5---sn-5hne6n6e.googlevideo.com",
    "rr1---sn-4g5ednsd.googlevideo.com",
    "rr5---sn-npoeenly.googlevideo.com",
    "rr4---sn-npoldn7s.googlevideo.com",
    "rr1---sn-30a7rned.googlevideo.com",
    "rr4---sn-npoldn7s.googlevideo.com",
    "rr5---sn-a5meknzs.googlevideo.com",
    "rr4---sn-a5msenll.googlevideo.com",
    "rr5---sn-npoe7nek.googlevideo.com",
    "rr4---sn-npoldn7s.googlevideo.com",
    "rr1---sn-npoe7nes.googlevideo.com",
    "rr5---sn-npoe7nek.googlevideo.com",
    "rr5---sn-a5meknzs.googlevideo.com",
    "rr4---sn-npoldn7s.googlevideo.com",
    "rr2---sn-30a7rner.googlevideo.com",
    "gds.google.com",
    "rr2---sn-30a7rne6.googlevideo.com",
    "rr2---sn-npoeened.googlevideo.com",
    "rr5---sn-30a7rnek.googlevideo.com",
    "rr4---sn-p5qlsny6.googlevideo.com",
    "lh4.googleusercontent.com",
    "rr4---sn-q4fl6nsd.googlevideo.com",
    "rr5---sn-q4fzenee.googlevideo.com",
    "suggestqueries-clients6.youtube.com",
    "rr1---sn-npoeenle.googlevideo.com",
    "rr3---sn-a5msenll.googlevideo.com",
    "rr2---sn-npoe7nds.googlevideo.com",
    "rr5---sn-npoe7nsr.googlevideo.com",
    "rr3---sn-30a7rned.googlevideo.com",
    "rr1---sn-p5qlsn6l.googlevideo.com",
    "rr2---sn-npoldn7d.googlevideo.com",
    "youtube.com",
    "rr1---sn-30a7yney.googlevideo.com",
    "googleads.g.doubleclick.net",
    "accounts.google.com.sg",
    "rr5---sn-npoldn7l.googlevideo.com",
    "rr4---sn-30a7ynl7.googlevideo.com",
    "accounts.youtube.com",
    "rr5---sn-a5mlrnll.googlevideo.com",
    "rr2---sn-npoeenly.googlevideo.com",
    "ssl.gstatic.com",
    "lh3.googleusercontent.com",
    "myaccount.google.com",
    "www.youtube.com",
    "ade.googlesyndication.com",
    "cdn.sanity.io",
    "github.com",
    "www.google.com.sg",
    "analytics.google.com",
    "www.google.com",
    "stats.g.doubleclick.net",
    "www.google-analytics.com",
    "www.googletagmanager.com",
    "www.gstatic.com",
    "www.googleadservices.com",
    "fonts.gstatic.com",
    "objects.githubusercontent.com",
    "rr2---sn-npoldn7y.googlevideo.com",
    "rr5---sn-a5mekndl.googlevideo.com",
    "rr4---sn-npoe7nek.googlevideo.com",
    "rr2---sn-30a7ynl7.googlevideo.com",
    "rr4---sn-30a7rner.googlevideo.com",
    "rr2---sn-npoldn76.googlevideo.com",
    "rr1---sn-npoldn7d.googlevideo.com",
    "tpc.googlesyndication.com",
    "yt3.ggpht.com",
    "play.google.com",
    "i.ytimg.com",
    "fonts.googleapis.com",
    "rr2---sn-npoeenez.googlevideo.com",
    "jnn-pa.googleapis.com",
    "rr2---sn-a5msenes.googlevideo.com",
    "pagead2.googlesyndication.com",
    "rr4---sn-npoe7nsr.googlevideo.com",
    "accounts.google.com",
    "rr2---sn-npoe7nl6.googlevideo.com",
    "rr5---sn-p5qlsnd6.googlevideo.com",
    "rr2---sn-npoe7nes.googlevideo.com",
    "ad.doubleclick.net",
  ]),
);
const pathname = "/token/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/https/";

const config = banner + domains.map((domain) => `

${domain} {
	encode gzip
	tls internal
	rewrite * ${pathname}${domain}{uri}
	reverse_proxy * ${upstream.join(" ")} {
		header_up Host {upstream_hostport}
	}
}

`).join("\n") + trailer;

await Deno.writeTextFile(caddyFile, config);

console.log(config);
const hosts = domains.map((domain) => `

::1     ${domain}

`)
  .join("\n");
await Deno.writeTextFile(hostsFile, hosts);
console.log(hosts);
