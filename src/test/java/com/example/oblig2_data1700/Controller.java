package com.example.oblig2_data1700;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class Controller {
    private final List<Billett> Billettene=new ArrayList<>();

    @PostMapping("/kunde")
    public void returBilletter(@RequestBody Billett innBillett){
        Billettene.add(innBillett);
    }

    @GetMapping("/hentBilletter")
    public List<Billett> hentBilletter() {
        return Billettene;
    }

    @GetMapping("/slettBilletter")
    public void slettBilletter() {
        Billettene.clear();
    }
}